"use client";

import { useState } from "react";

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

  const contacts = [
    {
      name: "Telegram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.094.034.308.019.474z" />
        </svg>
      ),
      link: "https://t.me/dividedmeepo",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      link: "https://linkedin.com/in/ellworts",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.243.445-2.261 1.176-3.061-.118-.289-.511-1.453.112-3.031 0 0 .959-.307 3.163 1.179.917-.255 1.898-.382 2.876-.386.978.004 1.959.131 2.876.386 2.204-1.486 3.162-1.179 3.162-1.179.624 1.578.231 2.742.113 3.031.732.8 1.177 1.818 1.177 3.061 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/ellworts",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      link: "https://wa.me/447767853122",
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:kuptsov5162@gmail.com",
    },
  ];

  return (
    <section id="contact" className="pt-[100px] pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        {/* Main Glassmorphic Container */}
        <div className="bg-[#2A3B44]/45 backdrop-blur-md border border-gray-700/50 rounded-[4px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Info & Horizontal Socials */}
          <div className="flex flex-col justify-center min-h-[300px]">
            <div className="my-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Work<br />Together!
              </h2>
              <p className="text-gray-300 text-base max-w-sm mb-8">
                Looking for a developer to build your product or join your team? Let&apos;s discuss how I can help.
              </p>

              {/* Horizontal Socials */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 max-w-sm">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith("mailto") ? "_self" : "_blank"}
                    rel={contact.link.startsWith("mailto") ? "" : "noopener noreferrer"}
                    className="w-12 h-12 rounded-full border border-gray-700/60 bg-[#22333B]/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8CD6D0] hover:bg-[#8CD6D0]/10 transition-all duration-300"
                    title={contact.name}
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#22333B]/90 border border-white/5 p-8 rounded-[4px] flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error alert */}
              {error && (
                <div className="bg-rose-950/50 border border-rose-500/50 text-rose-400 p-4 rounded text-sm text-center">
                  {error}
                </div>
              )}

              {/* Underlined Name Field */}
              <div className="flex flex-col border-b border-gray-700 focus-within:border-[#8CD6D0] transition-colors py-2">
                <label htmlFor="name" className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-white py-1 px-0 focus:outline-none focus:ring-0 text-sm placeholder-gray-400"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              {/* Underlined Email Field */}
              <div className="flex flex-col border-b border-gray-700 focus-within:border-[#8CD6D0] transition-colors py-2">
                <label htmlFor="email" className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-white py-1 px-0 focus:outline-none focus:ring-0 text-sm placeholder-gray-400"
                  placeholder="john@example.com"
                  disabled={loading}
                />
              </div>

              {/* Underlined Message Field */}
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

              {/* Left-aligned Submit Button */}
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

      {/* Floating Success Toast Popup */}
      {submitted && (
        <div className="toast-popup bg-emerald-950/95 border border-emerald-500/40 text-white px-6 py-4 rounded-[4px] flex items-center gap-3 backdrop-blur-sm max-w-sm">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
