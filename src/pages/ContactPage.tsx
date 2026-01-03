import { useState } from 'react';
import { MapPin, Mail, Linkedin, Send, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully!',
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact us directly at info@3dtransify.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24">
      <div className="relative pt-[9.68rem] pb-[13.23135rem] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/kscan-e/14.jpg"
            alt="Contact 3Dtransify"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative flex flex-col items-center justify-center px-8">
          <div className="text-center">
            <p className="text-cyan-400 text-sm tracking-[0.3em] mb-8 uppercase drop-shadow-lg">Get In Touch</p>
            <h1 className="text-7xl md:text-8xl font-extralight text-white leading-none mb-6 tracking-tight drop-shadow-2xl">
              CONTACT
            </h1>
            <p className="text-2xl text-white font-light tracking-wide drop-shadow-lg">
              Let's Transform Your Vision
            </p>
          </div>
        </div>
      </div>

      <section className="bg-neutral-900 py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs md:text-sm text-cyan-400 font-medium tracking-[0.2em] uppercase mb-4">
                  Contact Information
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                  Reach Out Today
                </h2>
                <p className="text-neutral-200 font-normal leading-relaxed">
                  Our team is ready to discuss your specific requirements and craft solutions tailored to your industry challenges.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase mb-2">
                      Location
                    </p>
                    <p className="text-white font-normal">
                      Nasr City, Cairo, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:info@3dtransify.com"
                      className="text-white font-normal hover:text-cyan-400 transition-colors duration-300"
                    >
                      info@3dtransify.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase mb-2">
                      Social Media
                    </p>
                    <p className="text-neutral-300 font-normal mb-2">
                      Follow us for industry insights
                    </p>
                    <a
                      href="#"
                      className="text-white font-normal hover:text-orange-400 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative bg-neutral-800/50 p-8 overflow-hidden border-l-4 border-orange-500">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: 'url(/flag.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="text-orange-400" size={20} />
                    <p className="text-xs text-neutral-300 font-medium tracking-[0.15em] uppercase">
                      Priority Support
                    </p>
                  </div>
                  <h3 className="text-white font-normal text-lg mb-3">
                    For Immediate Assistance
                  </h3>
                  <p className="text-neutral-300 font-normal text-sm leading-relaxed">
                    Technical inquiries or on-site demonstrations? Contact us directly for priority scheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-neutral-950 p-8 lg:p-12 border border-neutral-800">
                <div className="mb-8">
                  <p className="text-xs md:text-sm text-orange-400 font-medium tracking-[0.2em] uppercase mb-4">
                    Send Message
                  </p>
                  <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                    Tell Us About Your Project
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-neutral-300 font-medium text-sm mb-3 tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-neutral-300 font-medium text-sm mb-3 tracking-wide">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-neutral-300 font-medium text-sm mb-3 tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-neutral-300 font-medium text-sm mb-3 tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-neutral-300 font-medium text-sm mb-3 tracking-wide">
                      Type of Inquiry *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select an option...</option>
                      <option value="demo">Request a Demo</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-neutral-300 font-medium text-sm mb-3 tracking-wide">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 border ${
                        submitStatus.type === 'success'
                          ? 'bg-green-900/20 border-green-500/50 text-green-400'
                          : 'bg-red-900/20 border-red-500/50 text-red-400'
                      }`}
                    >
                      <p className="font-normal text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-white text-black px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase hover:bg-cyan-400 hover:text-black transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                    <Send size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xs md:text-sm text-white/80 font-medium tracking-[0.3em] uppercase">
            Regional Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-tight drop-shadow-2xl">
            Serving the Middle East<br />
            with Excellence
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-lg">
            Local support, global technology. We combine Scantech's world-class solutions with comprehensive regional expertise and service.
          </p>
        </div>
      </section>
    </div>
  );
}
