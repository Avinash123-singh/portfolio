import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import {
  HiOutlineChatAlt2,
  HiX,
  HiPaperAirplane,
  HiSparkles,
  HiVolumeUp,
  HiVolumeOff,
  HiMicrophone,
  HiArrowRight,
  HiOutlineExternalLink,
} from "react-icons/hi";
import {
  QUICK_QUESTIONS,
  GREETING,
  FALLBACK,
  resolveTopic,
} from "../data/assistantKnowledge";
import useSpeech, { useDictation } from "../hooks/useSpeech";

const INTRO = { role: "bot", text: GREETING, actions: FALLBACK.actions.slice(0, 2) };

function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INTRO]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const replyTimer = useRef(null);

  const voice = useSpeech();
  const dictation = useDictation((transcript) => setInput(transcript));

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => () => window.clearTimeout(replyTimer.current), []);

  const send = useCallback(
    (text) => {
      const question = text.trim();
      if (!question) return;
      setMessages((current) => [...current, { role: "user", text: question }]);
      setInput("");
      setTyping(true);

      const topic = resolveTopic(question);
      window.clearTimeout(replyTimer.current);
      replyTimer.current = window.setTimeout(() => {
        setMessages((current) => [
          ...current,
          { role: "bot", text: topic.answer, actions: topic.actions },
        ]);
        setTyping(false);
        if (voice.enabled) voice.speak(topic.answer);
      }, 480 + Math.random() * 360);
    },
    [voice]
  );

  const runAction = useCallback(
    (action) => {
      if (action.type === "ask") {
        send(action.query);
        return;
      }
      if (action.type === "link") {
        window.open(action.href, "_blank", "noopener,noreferrer");
        return;
      }
      // Scrolling only makes sense if the panel gets out of the way first.
      voice.stop();
      setOpen(false);
      window.setTimeout(() => {
        scroller.scrollTo(action.to, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }, 180);
    },
    [send, voice]
  );

  const lastBotIndex = messages.map((m) => m.role).lastIndexOf("bot");

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open portfolio assistant"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-lime text-espresso flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(205,252,138,0.6)]"
      >
        <span className="absolute inset-0 rounded-full border border-lime/60 animate-ping opacity-30 pointer-events-none"></span>
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="relative flex"
            >
              <HiX className="text-2xl" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative flex"
            >
              <HiOutlineChatAlt2 className="text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[560px] rounded-3xl bg-[#241a14] border border-cream/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-cream/10 bg-gradient-to-r from-teal/30 to-burgundy/20 shrink-0">
              <span className="relative w-9 h-9 rounded-xl bg-lime/15 border border-lime/30 flex items-center justify-center text-lime text-lg shrink-0">
                <HiSparkles />
                {voice.speaking && (
                  <motion.span
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl border border-lime"
                  ></motion.span>
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-cream font-display font-semibold text-sm">
                  Portfolio Assistant
                </p>
                <p className="text-cream/50 text-xs truncate">
                  {voice.speaking ? "Speaking…" : "Ask me anything about Avinash"}
                </p>
              </div>

              {voice.supported && (
                <button
                  type="button"
                  onClick={voice.toggleEnabled}
                  aria-pressed={voice.enabled}
                  aria-label={
                    voice.enabled
                      ? "Turn spoken replies off"
                      : "Turn spoken replies on"
                  }
                  title={
                    voice.enabled
                      ? "Spoken replies on — click to mute"
                      : "Spoken replies off — click to hear answers"
                  }
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    voice.enabled
                      ? "border-lime/50 bg-lime/15 text-lime"
                      : "border-cream/15 text-cream/50 hover:text-cream"
                  }`}
                >
                  {voice.enabled ? <HiVolumeUp /> : <HiVolumeOff />}
                </button>
              )}
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((message, index) => (
                <div key={index} className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[88%] text-sm leading-relaxed rounded-2xl px-4 py-2.5 whitespace-pre-line ${
                      message.role === "user"
                        ? "ml-auto bg-lime text-espresso rounded-br-sm"
                        : "mr-auto bg-cream/[0.06] border border-cream/10 text-cream/85 rounded-bl-sm"
                    }`}
                  >
                    {message.text}
                  </motion.div>

                  {message.role === "bot" && (
                    <div className="flex flex-wrap items-center gap-2">
                      {message.actions?.map((action) => (
                        <button
                          key={action.label}
                          type="button"
                          onClick={() => runAction(action)}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-lime/35 text-lime/90 hover:bg-lime hover:text-espresso hover:border-lime transition-colors"
                        >
                          {action.label}
                          {action.type === "link" ? (
                            <HiOutlineExternalLink className="text-sm" />
                          ) : action.type === "scroll" ? (
                            <HiArrowRight className="text-sm" />
                          ) : null}
                        </button>
                      ))}

                      {voice.supported && index === lastBotIndex && (
                        <button
                          type="button"
                          onClick={() =>
                            voice.speaking
                              ? voice.stop()
                              : voice.speak(message.text)
                          }
                          aria-label="Read this answer aloud"
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-cream/15 text-cream/55 hover:text-cream hover:border-cream/40 transition-colors"
                        >
                          {voice.speaking ? <HiVolumeOff /> : <HiVolumeUp />}
                          {voice.speaking ? "Stop" : "Listen"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="mr-auto bg-cream/[0.06] border border-cream/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 w-fit">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-cream/50"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    ></motion.span>
                  ))}
                </div>
              )}
            </div>

            {messages.length < 3 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2 shrink-0">
                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => send(question)}
                    className="text-xs px-3 py-1.5 rounded-full border border-cream/20 text-cream/70 hover:border-lime hover:text-lime transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-cream/10 p-3 shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  dictation.listening ? "Listening…" : "Ask a question..."
                }
                aria-label="Ask a question"
                className="flex-1 min-w-0 bg-espresso/60 border border-cream/15 rounded-xl py-2.5 px-4 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime"
              />

              {dictation.supported && (
                <button
                  type="button"
                  onClick={dictation.toggleListening}
                  aria-label="Ask by voice"
                  title="Ask by voice"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    dictation.listening
                      ? "border-lime bg-lime/20 text-lime"
                      : "border-cream/15 text-cream/55 hover:text-cream"
                  }`}
                >
                  <HiMicrophone className="text-lg" />
                </button>
              )}

              <button
                type="submit"
                aria-label="Send"
                className="w-10 h-10 rounded-xl bg-lime text-espresso flex items-center justify-center shrink-0 hover:brightness-110 transition"
              >
                <HiPaperAirplane className="rotate-90 text-lg" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AIAssistant;
