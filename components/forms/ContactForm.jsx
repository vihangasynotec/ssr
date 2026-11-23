'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Please include a message';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-black text-white uppercase">
          Message Dispatched
        </h3>
        <p className="text-xs text-gray-300 max-w-sm mx-auto">
          Thank you for reaching out to Southern Super Riders. Our club representatives will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="mt-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-ssr-red text-white text-xs font-black uppercase tracking-wider transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl space-y-5"
      noValidate
    >
      <div className="space-y-1">
        <h3 className="text-xl font-black text-white uppercase tracking-tight">
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-gray-400">
          Have an inquiry, partnership request, or ride collaboration idea? Fill out the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Full Name <span className="text-ssr-red">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.name
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.name && (
            <p className="text-[11px] font-semibold text-red-400">{errors.name}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Phone Number <span className="text-ssr-red">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+94 ..."
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.phone
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] font-semibold text-red-400">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-black uppercase text-white tracking-wider">
          Email Address <span className="text-ssr-red">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@domain.com"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
            errors.email
              ? 'border-red-500 bg-red-950/20 text-white'
              : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
          }`}
        />
        {errors.email && (
          <p className="text-[11px] font-semibold text-red-400">{errors.email}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-black uppercase text-white tracking-wider">
          Subject <span className="text-ssr-red">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Media Collaboration / Ride Question"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
            errors.subject
              ? 'border-red-500 bg-red-950/20 text-white'
              : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
          }`}
        />
        {errors.subject && (
          <p className="text-[11px] font-semibold text-red-400">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-black uppercase text-white tracking-wider">
          Message <span className="text-ssr-red">*</span>
        </label>
        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
            errors.message
              ? 'border-red-500 bg-red-950/20 text-white'
              : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
          }`}
        />
        {errors.message && (
          <p className="text-[11px] font-semibold text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-ssr-red flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {submitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>DISPATCH MESSAGE</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
