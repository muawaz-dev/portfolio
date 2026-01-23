/* ==========================================
   CONTACT PAGE
   Glassmorphic form with social links
   ========================================== */

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import FloatingOrbs from '@/components/FloatingOrbs';
import SectionHeader from '@/components/SectionHeader';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.form-field', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.3 });
      gsap.fromTo('.submit-btn', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, delay: 0.7 });
      gsap.fromTo('.contact-hero', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => alert(error));
};

  return (
    <main ref={pageRef} className="pt-24 pb-20 min-h-screen">
      <FloatingOrbs variant="hero" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader className='contact-hero' label="Get in Touch" title="Contact Us" description="Have a project in mind? Let's create something amazing together." />

        <div className="max-w-2xl mx-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-12 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-field">
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 glass-input text-foreground placeholder:text-muted-foreground focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="form-field">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 glass-input text-foreground placeholder:text-muted-foreground focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div className="form-field">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 glass-input text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn btn-neon w-full flex items-center justify-center gap-2"
            >
              Send Message <PaperPlaneTilt size={20} weight="light" />
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">
            <a href="https://github.com/muawaz-dev" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:glow-purple transition-all">
              <GithubLogo size={24} weight="light" className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/muawaz-ahmad/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:glow-purple transition-all">
              <LinkedinLogo size={24} weight="light" className="text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
