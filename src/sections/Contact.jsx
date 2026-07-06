import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    const recipient = "lalith8302@gmail.com";
    const emailSubject = `[Portfolio Contact] ${formData.subject}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Simulate sending delay, open Gmail compose tab, and reset form
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      window.open(gmailUrl, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success notification after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            Let's connect! Send a message or reach out via professional profiles.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact details list */}
            {[
              { icon: <Mail className="text-indigo-400" size={18} />, label: "Email", val: "lalith8302@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=lalith8302@gmail.com&su=Collaboration%20Inquiry%20%7C%20Portfolio%20Visitor&body=Hi%20Lalith%2C%0A%0AI%20visited%20your%20portfolio%20website%20and%20was%20impressed%20by%20your%20work%20in%20AI%2C%20Machine%20Learning%2C%20and%20Full%20Stack%20Development.%20I%20am%20reaching%20out%20to%20discuss%20potential%20collaboration%20%2F%20career%20opportunities.%0A%0AA%20bit%20about%20myself%20%2F%20the%20project%3A%0A-%20Name%3A%20%5BYour%20Name%5D%0A-%20Company%20%2F%20Organization%3A%20%5BYour%20Organization%5D%0A-%20Nature%20of%20Inquiry%3A%20%5Be.g.%2C%20Job%20Opportunity%20%2F%20Freelance%20Project%20%2F%20Tech%20Discussion%5D%0A%0ALet's%20connect%20soon!%0A%0ABest%20regards%2C" },
              { icon: <Phone className="text-purple-400" size={18} />, label: "Phone", val: "+91 87787 67644", href: "tel:+918778767644" },
              { icon: <MapPin className="text-teal-400" size={18} />, label: "Location", val: "Coimbatore, Tamil Nadu, India", href: "#" }
            ].map((det, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl neo-card border border-white/5 flex items-center space-x-4 hover:scale-102 transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center flex-shrink-0">
                  {det.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-wider uppercase text-slate-400 font-display">
                    {det.label}
                  </h4>
                  {det.href !== '#' ? (
                    <a 
                      href={det.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-semibold text-white hover:text-indigo-400 transition-colors font-mono"
                    >
                      {det.val}
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-white font-mono">
                      {det.val}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder Card */}
            <div className="p-5 rounded-3xl neo-card border border-white/5 h-64 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#0a0f1b] opacity-80 z-0" />
              {/* Graphic grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.06)_1px,transparent_1px)] [background-size:16px_16px] z-10" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                <div className="w-12 h-12 rounded-full bg-[#0c1322] border border-white/5 shadow-neo-flat flex items-center justify-center mb-3">
                  <MapPin size={22} className="text-indigo-400 animate-bounce" />
                </div>
                <h4 className="font-bold text-white font-display text-sm">Interactive Map Location</h4>
                <p className="text-[10px] text-slate-400 font-body max-w-[200px] mt-1 leading-relaxed">
                  Coimbatore Hub, Tamil Nadu, India
                </p>
                <span className="mt-4 text-[9px] font-bold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 shadow-neo-inset">
                  Coordinates: 11.0168° N, 76.9558° E
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl neo-card border border-white/5">
              <h3 className="text-lg font-bold font-display text-white mb-6">Send Message</h3>

              {/* Form container */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 font-display">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1b] border ${
                        errors.name ? 'border-red-500/40' : 'border-white/5'
                      } text-xs font-medium text-white shadow-neo-inset focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all font-body`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 font-medium flex items-center mt-1">
                        <AlertCircle size={10} className="mr-1" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 font-display">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1b] border ${
                        errors.email ? 'border-red-500/40' : 'border-white/5'
                      } text-xs font-medium text-white shadow-neo-inset focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all font-body`}
                      placeholder="e.g. john@example.com"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 font-medium flex items-center mt-1">
                        <AlertCircle size={10} className="mr-1" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 font-display">
                    Subject Heading
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1b] border ${
                      errors.subject ? 'border-red-500/40' : 'border-white/5'
                    } text-xs font-medium text-white shadow-neo-inset focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all font-body`}
                    placeholder="Project request, internship, feedback, etc."
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-400 font-medium flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400 font-display">
                    Detailed Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0f1b] border ${
                      errors.message ? 'border-red-500/40' : 'border-white/5'
                    } text-xs font-medium text-white shadow-neo-inset focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all font-body resize-none`}
                    placeholder="Enter your message detail here..."
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 font-medium flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button / Notifications */}
                <div className="pt-2 flex flex-col items-center sm:flex-row sm:justify-between gap-4">
                  
                  {/* Success notification popup */}
                  <div className="h-6">
                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="flex items-center text-emerald-400 text-xs font-semibold"
                        >
                          <CheckCircle2 size={14} className="mr-1.5" />
                          Message sent successfully!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl neo-btn font-bold font-display text-xs uppercase tracking-widest text-indigo-400 hover:text-white flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-indigo transition-all"
                  >
                    {isSending ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin mr-1.5" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>

                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
