/* ==========================================
   ABOUT PAGE
   Bio, Values with Phosphor icons
   ========================================== */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Target, Handshake, Heart } from '@phosphor-icons/react';
import FloatingOrbs from '@/components/FloatingOrbs';
import SectionHeader from '@/components/SectionHeader';
import GlassCard from '@/components/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'We embrace new technologies and creative solutions to solve complex problems.' },
  { icon: Target, title: 'Excellence', description: 'We deliver exceptional quality in every project, exceeding expectations.' },
  { icon: Handshake, title: 'Partnership', description: 'We build lasting relationships based on trust and mutual success.' },
  { icon: Heart, title: 'Passion', description: 'We love what we do, and it shows in every pixel we craft.' },
];

const AboutPage = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero', { opacity: 0, y: 40, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 });
      gsap.fromTo('.logo-frame', { opacity: 0, x: -40, filter: 'blur(10px)' }, { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, scrollTrigger: { trigger: '.about-content', start: 'top 80%' } });
      gsap.fromTo('.value-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: '.values-grid', start: 'top 85%' } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 gradient-mesh">
        <FloatingOrbs variant="hero" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="about-hero max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mt-4 mb-6">
              We Build <span className="text-glow text-primary">Digital Dreams</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kodac Solutions is a forward-thinking web development agency dedicated to transforming ideas into stunning digital experiences. With a passion for innovation and an eye for detail, we craft websites that not only look beautiful but perform exceptionally.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo Frame - Placeholder for future logo */}
            <div className="logo-frame flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full glass-card flex items-center justify-center glow-purple group hover:scale-105 transition-transform duration-500">
                <span className="text-6xl font-bold text-primary">K</span>
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
              </div>
            </div>

            {/* Values */}
            <div>
              <SectionHeader label="Our Values" title="What Drives Us" align="left" />
              <div className="values-grid grid sm:grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <GlassCard key={i} className="value-card">
                    <value.icon size={28} weight="light" className="text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
