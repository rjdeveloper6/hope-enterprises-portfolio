import { useState } from "react";
import Reveal from "../components/Reveal";
import companyLogo from "../assets/company-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import instagramQr from "../assets/instagram-qr-code.png";
import whatsappLogo from "../assets/whatsapp-logo.png";
import whatsappQr from "../assets/whatsapp-qr-code.png";

const CONTACT_EMAIL = "hopedesigner24@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL,
)}`;

const channels = [
  {
    name: "WhatsApp",
    logo: whatsappLogo,
    qr: whatsappQr,
    text: "Scan to start a quick project conversation and share requirements directly.",
    actionLabel: "Chat on WhatsApp",
  },
  {
    name: "Instagram",
    logo: instagramLogo,
    qr: instagramQr,
    text: "Scan to explore updates, visuals, and recent activity from the studio.",
    actionLabel: "Open Instagram",
  },
];

const contactHighlights = [
  "Fast design discussion setup",
  "Easy sharing of references and project inputs",
  "A clean, direct way to stay connected with the brand",
];

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "" });

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: "New enquiry from Hope Design & Enterprises website",
            _template: "table",
            _replyto: formData.email,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Unable to send email right now.");
      }

      setFormData(initialFormData);
      setSubmitState({
        status: "success",
        message: "Message sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send email right now.",
      });
    }
  }

  return (
    <div className="px-4 pb-24 pt-28 text-slate-100 sm:px-6 sm:pt-32">
      <section className="max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8 lg:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
                Contact
              </span>
              <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Connect with Hope Design & Enterprises through one clean
                responsive contact experience.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Reach out for design discussions, project sharing, or general
                updates using our active social channels and email section
                below.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {contactHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[rgba(8,18,14,0.8)] px-5 py-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[rgba(8,18,14,0.92)] p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.3)] sm:p-10">
              <img
                src={companyLogo}
                alt="Hope Design & Enterprises logo"
                className="h-20 w-20 rounded-3xl object-contain shadow-[0_0_30px_rgba(74,222,128,0.15)] sm:h-24 sm:w-24"
              />
              <h2 className="mt-6 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Let's build with clarity.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-slate-400">
                Scan a QR code, open an email draft, or copy the contact address
                to start the conversation in the way that feels easiest for your
                client.
              </p>

              <div className="mt-8 w-full rounded-[1.5rem] border border-green-400/15 bg-green-400/8 p-5 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                  Email
                </p>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-lg font-semibold text-slate-50 transition hover:text-green-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-10">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(10,22,17,0.88)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
                    Social Contact
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
                    QR cards designed to feel cleaner on mobile and desktop.
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {channels.map((channel) => (
                  <article
                    key={channel.name}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(6,16,12,0.72)] p-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={channel.logo}
                        alt={channel.name}
                        className="h-11 w-11 rounded-2xl object-contain"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-slate-50">
                          {channel.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                          Scan and connect
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {channel.text}
                    </p>

                    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#ffffff_0%,#ecfff2_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <div className="mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center rounded-[1.25rem] bg-white p-3 shadow-[0_12px_40px_rgba(6,17,12,0.12)]">
                        <img
                          src={channel.qr}
                          alt={`${channel.name} QR code`}
                          className="h-full w-full rounded-xl object-contain"
                        />
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-center text-sm font-medium text-slate-300">
                      {channel.actionLabel}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
                Email Form
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Send to inbox
              </h2>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[rgba(8,18,14,0.9)] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-green-400/40"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[rgba(8,18,14,0.9)] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-green-400/40"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[rgba(8,18,14,0.9)] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-green-400/40"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirement"
                  rows="6"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[rgba(8,18,14,0.9)] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-green-400/40"
                />
              </div>

              {submitState.message && (
                <p
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                    submitState.status === "success"
                      ? "border-green-400/25 bg-green-400/10 text-green-200"
                      : "border-red-400/25 bg-red-400/10 text-red-200"
                  }`}
                >
                  {submitState.message}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={submitState.status === "loading"}
                  className="rounded-2xl bg-green-400 px-6 py-3 font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState.status === "loading"
                    ? "Sending..."
                    : "Send to Inbox"}
                </button>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-green-400/40 hover:text-green-300"
                >
                  Open Gmail
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Contact;
