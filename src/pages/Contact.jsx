import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    window.setTimeout(() => setSent(false), 2600);
  };

  return (
    <section className="page-shell pt-8">
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="section-card">
          <p className="eyebrow">
            Contact
          </p>
          <h2 className="section-title mt-3">
            Keep the conversation open for partnerships, feedback, or travel ideas.
          </h2>
          <p className="body-copy mt-4">
            This page now uses a stronger two-column layout on large screens and a single-column
            stack on smaller devices, with form inputs sized and spaced for touch interaction.
          </p>
          <div className="mt-6 glass-panel p-4 text-sm leading-7 text-slate-300">
            Share what you are building, where you want to travel next, or what feature would make
            this planner even more useful.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="section-card space-y-4" aria-label="Contact form">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-field"
            />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-field"
            />
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-200">Message</span>
          <textarea
            name="message"
            placeholder="Tell us about your travel plans or feedback"
            value={form.message}
            onChange={handleChange}
            required
            className="input-field min-h-[12rem] md:min-h-[14rem]"
          />
          </label>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">Fields are touch-friendly and ready for smaller screens.</p>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send message
            </button>
          </div>
          {sent ? (
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100" aria-live="polite">
              Message sent successfully.
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
