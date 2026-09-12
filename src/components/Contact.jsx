import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import SectionTag from "./SectionTag";
import SectionDivider from "./SectionDivider";
import Reveal from "./Reveal";
import MessageSent from "./MessageSent";
import { getSectionColor } from "../theme/sectionColors";

const INBOX = "avisingh70001@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${INBOX}`;
const FALLBACK_ENDPOINT = "https://getform.io/f/awngrnmb";

function receivedAt() {
  return new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
  });
}

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("sending");
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    // FormSubmit renders these keys as clean table labels in Gmail.
    // Subject + reply-to make it look like a real professional enquiry.
    const payload = {
      "Sender Name": name,
      "Sender Email": email,
      "Enquiry Type": "Portfolio contact form",
      "Date Received": `${receivedAt()} (IST)`,
      "Message": message,
      _subject: `Portfolio enquiry — ${name}`,
      _template: "table",
      _captcha: "false",
      _replyto: email,
      _honey: "",
    };

    try {
      await axios.post(FORM_ENDPOINT, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setStatus("sent");
      reset();
    } catch (error) {
      console.warn("FormSubmit failed, trying fallback:", error?.message);
      try {
        await axios.post(FALLBACK_ENDPOINT, {
          Name: name,
          Email: email,
          Message: message,
          "Date Received": `${receivedAt()} (IST)`,
        });
        setStatus("sent");
        reset();
      } catch (fallbackError) {
        console.error("Error sending message:", fallbackError);
        setStatus("error");
      }
    }
  };

  const mailtoFallback = () => {
    const { name = "", email = "", message = "" } = getValues();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    return `mailto:${INBOX}?subject=${subject}&body=${body}`;
  };

  const color = getSectionColor("contact");

  return (
    <section name="contact" className="relative overflow-hidden">
      <SectionDivider color={getSectionColor("contact")} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#022E21_0%,#1C1714_45%,#1A0A0F_100%)]"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-teal/40 rounded-full blur-[170px]"></div>
      <div className="absolute top-0 left-0 w-[26rem] h-[26rem] bg-burgundy/70 rounded-full blur-[150px]"></div>

      <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 md:py-28">
        <SectionTag index="05" label="Contact" color={color} />
        <Reveal>
          <h2 className="section-heading">
            Let&apos;s build something{" "}
            <span className="text-lime">worth shipping</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-10 items-stretch">
          <Reveal delay={0.05} className="h-full">
            <div className="h-full flex flex-col justify-between gap-5">
              <div className="glass-card p-6 flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-lime/10 border border-lime/20 text-lime text-xl shrink-0">
                  <HiOutlineMail />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-sand">
                    Email
                  </p>
                  <p className="text-cream">{INBOX}</p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-lime/10 border border-lime/20 text-lime text-xl shrink-0">
                  <HiOutlinePhone />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-sand">
                    Phone
                  </p>
                  <p className="text-cream">+91 7985047536</p>
                </div>
              </div>
              <div className="glass-card p-6 bg-teal/20 flex-1 flex items-center">
                <p className="text-cream/70 text-sm leading-relaxed">
                  Open to full-time roles, contract work and the occasional
                  interesting side build. Tell me what you&apos;re working on
                  and what you need from it — I&apos;ll come back with an
                  honest answer either way.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <div className="glass-card p-6 md:p-8 relative overflow-hidden h-full min-h-[420px]">
              <AnimatePresence mode="wait">
                {status !== "sent" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5 h-full flex flex-col"
                  >
                    <div>
                      <input
                        {...register("name", { required: true })}
                        className="w-full bg-espresso/60 border border-cream/15 rounded-xl py-3 px-4 text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors"
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                      />
                      {errors.name && (
                        <span className="text-xs text-lime/80">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email", { required: true })}
                        className="w-full bg-espresso/60 border border-cream/15 rounded-xl py-3 px-4 text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors"
                        type="text"
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      {errors.email && (
                        <span className="text-xs text-lime/80">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <textarea
                        {...register("message", { required: true })}
                        name="message"
                        className="w-full flex-1 min-h-[100px] bg-espresso/60 border border-cream/15 rounded-xl py-3 px-4 text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors resize-none"
                        placeholder="Enter Your Message Here"
                      />
                      {errors.message && (
                        <span className="text-xs text-lime/80">
                          This field is required
                        </span>
                      )}
                    </div>
                    {status === "error" && (
                      <div className="flex items-start gap-2 rounded-xl border border-[#E2557D]/40 bg-[#E2557D]/10 px-3 py-2.5 text-xs text-cream/85">
                        <HiOutlineExclamationCircle className="mt-0.5 shrink-0 text-base text-[#E2557D]" />
                        <span>
                          That didn&apos;t go through.{" "}
                          <a
                            href={mailtoFallback()}
                            className="font-semibold text-lime underline"
                          >
                            Email me directly
                          </a>{" "}
                          and it will reach me straight away.
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full"
                  >
                    <MessageSent onReset={() => setStatus("idle")} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
