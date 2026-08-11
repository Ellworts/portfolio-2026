"use client";

import { useState } from "react";
import {
  TelegramIcon,
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon,
  EmailIcon,
  CheckIcon,
  CloseIcon,
} from "./icons";

const contacts = [
  { name: "Telegram", icon: TelegramIcon, link: "https://t.me/dividedmeepo" },
  { name: "LinkedIn", icon: LinkedInIcon, link: "https://linkedin.com/in/ellworts" },
  { name: "GitHub", icon: GitHubIcon, link: "https://github.com/ellworts" },
  { name: "WhatsApp", icon: WhatsAppIcon, link: "https://wa.me/447767853122" },
  { name: "Email", icon: EmailIcon, link: "mailto:kuptsov5162@gmail.com" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="pt-[100px] pb-[100px]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        <div className="bg-[#2A3B44]/45 backdrop-blur-md border border-gray-700/50 rounded-[4px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col justify-center min-h-[300px]">
            <div className="my-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Work<br />Together!
              </h2>
              <p className="text-gray-300 text-base max-w-sm mb-8">
                Looking for a developer to build your product or join your team? Let&apos;s discuss how I can help.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 max-w-sm">
                {contacts.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.link}
                    target={contact.link.startsWith("mailto") ? "_self" : "_blank"}
                    rel={contact.link.startsWith("mailto") ? "" : "noopener noreferrer"}
                    className={`w-12 h-12 rounded-full border border-gray-700/60 bg-[#22333B]/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8CD6D0] hover:bg-[#8CD6D0]/10 transition-all duration-300 ${
                      contact.name === "GitHub" ? "hidden md:flex" : "flex"
                    }`}
                    title={contact.name}
                  >
                    <contact.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#22333B]/90 border border-white/5 p-8 rounded-[4px] flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">

              {error && (
                <div className="bg-rose-950/50 border border-rose-500/50 text-rose-400 p-4 rounded text-sm text-center">
                  {error}
                </div>
              )}

              <FormField label="Name" id="name" type="text" placeholder="John Doe" value={formState.name} onChange={handleChange} disabled={loading} />
              <FormField label="Email Address" id="email" type="email" placeholder="john@example.com" value={formState.email} onChange={handleChange} disabled={loading} />

              <div className="flex flex-col border-b border-gray-700 focus-within:border-[#8CD6D0] transition-colors py-2">
                <label htmlFor="message" className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-white py-1 px-0 focus:outline-none focus:ring-0 text-sm resize-none placeholder-gray-400"
                  placeholder="Drop me a message..."
                  disabled={loading}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#8CD6D0] hover:bg-[#7BC4BE] disabled:bg-gray-700 disabled:text-gray-400 text-[#12161A] font-bold px-8 py-3 rounded-[4px] text-sm transition-colors cursor-pointer"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {submitted && (
        <div className="toast-popup bg-emerald-950/95 border border-emerald-500/40 text-white px-6 py-4 rounded-[4px] flex items-center gap-3 backdrop-blur-sm max-w-sm">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <CheckIcon />
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-sm text-emerald-400">Success!</h4>
            <p className="text-gray-300 text-xs mt-0.5">Your message was sent successfully.</p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 ml-2 flex-shrink-0"
            aria-label="Close notification"
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </section>
  );
}

function FormField({ label, id, type, placeholder, value, onChange, disabled }) {
  return (
    <div className="flex flex-col border-b border-gray-700 focus-within:border-[#8CD6D0] transition-colors py-2">
      <label htmlFor={id} className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-none text-white py-1 px-0 focus:outline-none focus:ring-0 text-sm placeholder-gray-400"
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
