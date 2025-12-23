/* ==========================================
   HOMEPAGE
   Hero, Services, Why Choose Us sections
   ========================================== */

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Rocket, Shield, Users, Sparkle } from '@phosphor-icons/react';
import SplineBackground from '@/components/SplineBackground';
import FloatingOrbs from '@/components/FloatingOrbs';
import SectionHeader from '@/components/SectionHeader';
import GlassCard from '@/components/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Code, title: 'Web Development', description: 'Custom websites and web applications built with cutting-edge technologies.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that captivate and convert users.' },
  { icon: Rocket, title: 'Performance', description: 'Lightning-fast load times and optimized user experiences.' },
];

const reasons = [
  { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security for your digital assets.' },
  { icon: Users, title: 'Dedicated Team', description: 'Expert developers committed to your success.' },
  { icon: Sparkle, title: 'Innovation First', description: 'Cutting-edge solutions that set you apart.' },
];

const HomePage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { opacity: 0, y: 50, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 });
      gsap.fromTo('.hero-cta', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.8 });
      
      gsap.fromTo('.service-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: '.services-section', start: 'top 80%' } });
      gsap.fromTo('.reason-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: '.reasons-section', start: 'top 80%' } });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SplineBackground />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6">
            Kodac <span className="text-glow text-primary">Solutions</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Crafting Digital Excellence with Cutting-Edge Web Solutions
          </p>
          <Link to="/contact" className="hero-cta btn-neon inline-block">Contact Us</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section relative py-32 gradient-mesh">
        <div className="container mx-auto px-6">
          <SectionHeader label="What We Do" title="Our Services" description="We deliver exceptional web solutions tailored to your needs." />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <GlassCard key={i} className="service-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center glow-purple">
                  <service.icon size={32} weight="light" className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="reasons-section relative py-32">
        <FloatingOrbs variant="section" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader label="Why Us" title="Why Choose Kodac" description="Partner with a team that's dedicated to your digital success." />
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <GlassCard key={i} className="reason-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center glow-blue">
                  <reason.icon size={32} weight="light" className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
