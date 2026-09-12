import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-assistant-voice";

// Bullets, arrows and emoji read terribly out loud, and the synthesiser
// pauses oddly on double newlines — flatten all of it before speaking.
function forSpeech(text) {
  return text
    .replace(/[•▸]/g, "")
    .replace(/\n+/g, ". ")
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pickVoice(voices) {
  const english = voices.filter((v) => v.lang && v.lang.startsWith("en"));
  if (!english.length) return null;
  const preferred = [
    "Google UK English Female",
    "Google US English",
    "Samantha",
    "Karen",
    "Daniel",
  ];
  for (const name of preferred) {
    const match = english.find((v) => v.name === name);
    if (match) return match;
  }
  return english.find((v) => v.localService) || english[0];
}

/**
 * Text-to-speech for assistant replies, plus optional microphone dictation.
 * Both are progressive enhancements — if the browser lacks either API the
 * hook simply reports it as unsupported and the chat works as normal.
 */
export default function useSpeech() {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  const supported = Boolean(synth);

  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(STORAGE_KEY) === "on";
  });
  const [speaking, setSpeaking] = useState(false);
  const voiceRef = useRef(null);

  useEffect(() => {
    if (!synth) return undefined;
    function load() {
      voiceRef.current = pickVoice(synth.getVoices());
    }
    load();
    synth.addEventListener("voiceschanged", load);
    return () => synth.removeEventListener("voiceschanged", load);
  }, [synth]);

  // Leaving the page mid-sentence otherwise keeps the browser talking.
  useEffect(() => {
    if (!synth) return undefined;
    return () => synth.cancel();
  }, [synth]);

  const stop = useCallback(() => {
    if (!synth) return;
    synth.cancel();
    setSpeaking(false);
  }, [synth]);

  const speak = useCallback(
    (text) => {
      if (!synth || !text) return;
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(forSpeech(text));
      if (voiceRef.current) utterance.voice = voiceRef.current;
      utterance.rate = 1.02;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      synth.speak(utterance);
    },
    [synth]
  );

  const toggleEnabled = useCallback(() => {
    setEnabled((previous) => {
      const next = !previous;
      window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      if (!next && synth) {
        synth.cancel();
        setSpeaking(false);
      }
      return next;
    });
  }, [synth]);

  return { supported, enabled, toggleEnabled, speak, stop, speaking };
}

/** Microphone dictation via the Web Speech API, where available. */
export function useDictation(onResult) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const callbackRef = useRef(onResult);
  callbackRef.current = onResult;

  const SpeechRecognition =
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition
      : null;

  useEffect(() => {
    if (!SpeechRecognition) return undefined;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript;
      if (transcript) callbackRef.current(transcript);
    };
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognitionRef.current = recognition;
    return () => {
      recognition.onresult = null;
      recognition.onend = null;
      recognition.onerror = null;
      recognition.abort();
    };
  }, [SpeechRecognition]);

  const toggleListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      try {
        recognition.start();
        setListening(true);
      } catch {
        setListening(false);
      }
    }
  }, [listening]);

  return { supported: Boolean(SpeechRecognition), listening, toggleListening };
}
