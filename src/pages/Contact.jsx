import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for contacting The Voyage Vault!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-6">
        We'd love to hear from you! Send us a message below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-accent text-white py-2 rounded hover:bg-vaultBlue transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
