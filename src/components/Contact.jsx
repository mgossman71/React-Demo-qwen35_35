import { useState } from 'react';
import { siteData } from '../data/site';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would send to a backend
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="badge mb-4">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about firearm transfers? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <a href="tel:6125086258" className="text-ffl-primary hover:underline text-lg">
                      (612) 508-6258
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a href="mailto:info@mjgfirearms.com" className="text-ffl-primary hover:underline text-lg">
                      info@mjgfirearms.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <div className="font-semibold text-slate-900">Location</div>
                    <div className="text-slate-600">
                      Andover, MN 55304
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <div className="font-semibold text-slate-900">Business Hours</div>
                    <div className="text-slate-600">
                      Mon-Fri: 9AM-6PM<br />
                      Sat: 10AM-4PM<br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Map Location Placeholder</p>
                <p className="text-sm">Address: Andover, MN 55304</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h3>

            {submitted && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ffl-primary focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ffl-primary focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ffl-primary focus:border-transparent outline-none"
                    placeholder="(612) 508-6258"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ffl-primary focus:border-transparent outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="transfer-info">General Transfer Information</option>
                  <option value="eligibility">Eligibility Questions</option>
                  <option value="pricing">Pricing & Fees</option>
                  <option value="appointment">Schedule Appointment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ffl-primary focus:border-transparent outline-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>

              <p className="text-sm text-slate-600 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
