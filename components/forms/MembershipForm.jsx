'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    district: '',
    motorcycleBrand: '',
    motorcycleModel: '',
    engineCapacity: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^[0-9+-\s]{9,15}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = 'Enter a valid telephone number';
    }
    if (!formData.district.trim()) newErrors.district = 'Location / District is required';
    if (!formData.motorcycleBrand.trim()) newErrors.motorcycleBrand = 'Motorcycle brand is required';
    if (!formData.motorcycleModel.trim()) newErrors.motorcycleModel = 'Motorcycle model is required';
    if (!formData.engineCapacity.trim()) {
      newErrors.engineCapacity = 'Engine capacity (CC) is required';
    } else if (isNaN(Number(formData.engineCapacity)) || Number(formData.engineCapacity) <= 0) {
      newErrors.engineCapacity = 'Please enter a valid engine CC';
    }
    return newErrors;
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
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E31E24', '#B5121B', '#FFFFFF', '#0A0A0B'],
      });
    } catch {}
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
            APPLICATION RECEIVED
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
            Your membership enquiry for the <strong className="text-white">{formData.motorcycleBrand} {formData.motorcycleModel} ({formData.engineCapacity} CC)</strong> has been recorded by Southern Super Riders.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 max-w-md mx-auto">
          <p>
            Please note: Submitting this enquiry initiates safety verification. Our committee will contact you via WhatsApp or phone within 48 hours for document validation and ride safety alignment.
          </p>
        </div>

        <div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                contactNumber: '',
                email: '',
                district: '',
                motorcycleBrand: '',
                motorcycleModel: '',
                engineCapacity: '',
                message: '',
              });
            }}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-ssr-red text-white text-xs font-black uppercase tracking-wider transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl space-y-6"
      noValidate
    >
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
          Membership Enquiry Form
        </h3>
        <p className="text-xs text-gray-400">
          All high-capacity superbike owners in Sri Lanka are welcome to connect with SSR.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Full Name <span className="text-ssr-red">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Kasun Fernando"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.fullName
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Contact Number <span className="text-ssr-red">*</span>
          </label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="e.g. +94 77 123 4567"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.contactNumber
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.contactNumber && (
            <p className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.contactNumber}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Email Address <span className="text-gray-500 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rider@example.com"
            className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500 text-sm focus:outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            District / Town <span className="text-ssr-red">*</span>
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="e.g. Galle, Matara, Colombo..."
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.district
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.district && (
            <p className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.district}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Motorcycle Brand <span className="text-ssr-red">*</span>
          </label>
          <input
            type="text"
            name="motorcycleBrand"
            value={formData.motorcycleBrand}
            onChange={handleChange}
            placeholder="e.g. Yamaha, Honda, Kawasaki, Ducati, BMW"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.motorcycleBrand
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.motorcycleBrand && (
            <p className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.motorcycleBrand}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-black uppercase text-white tracking-wider">
            Motorcycle Model <span className="text-ssr-red">*</span>
          </label>
          <input
            type="text"
            name="motorcycleModel"
            value={formData.motorcycleModel}
            onChange={handleChange}
            placeholder="e.g. YZF-R1, CBR1000RR, Ninja ZX-10R"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.motorcycleModel
                ? 'border-red-500 bg-red-950/20 text-white'
                : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
            }`}
          />
          {errors.motorcycleModel && (
            <p className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.motorcycleModel}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-black uppercase text-white tracking-wider">
          Engine Capacity (Displacement in CC) <span className="text-ssr-red">*</span>
        </label>
        <input
          type="number"
          name="engineCapacity"
          value={formData.engineCapacity}
          onChange={handleChange}
          placeholder="e.g. 600, 1000, 1200..."
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
            errors.engineCapacity
              ? 'border-red-500 bg-red-950/20 text-white'
              : 'border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500'
          }`}
        />
        {errors.engineCapacity && (
          <p className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.engineCapacity}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-black uppercase text-white tracking-wider">
          Riding Experience / Message
        </label>
        <textarea
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your touring history, preferred riding style, and what you hope to experience with Southern Super Riders..."
          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-ssr-red bg-white/5 text-white placeholder-gray-500 text-sm focus:outline-none transition-all"
        />
      </div>

      <div className="p-3.5 rounded-xl bg-ssr-red/10 border border-ssr-red/30 text-[11px] text-gray-300 leading-relaxed">
        <strong>Club Policy:</strong> Southern Super Riders promotes disciplined highway safety. Submitting an enquiry does not constitute confirmed membership until safety vetting and document review are finalized.
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-ssr-red hover:shadow-ssr-red-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {submitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing Enquiry...</span>
          </>
        ) : (
          <>
            <span>SUBMIT MEMBERSHIP ENQUIRY</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
