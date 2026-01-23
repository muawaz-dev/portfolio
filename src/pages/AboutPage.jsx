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
import Logo from "../assets/Kodac_Logo_white.png"
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile.jsx';
import Pfp from "../assets/MuawazPic2.jpg"
gsap.registerPlugin(ScrollTrigger);

const values = [
  { 
    icon: Lightbulb, 
    title: 'Innovation', 
    description: 'I constantly explore new ideas and technologies to create unique, forward-thinking designs.' 
  },
  { 
    icon: Target, 
    title: 'Dedication', 
    description: 'I put in the effort and focus needed to deliver work that truly reflects my best self.' 
  },
  { 
    icon: Handshake, 
    title: 'Collaboration', 
    description: 'I enjoy working with others, learning from different perspectives, and building meaningful connections.' 
  },
  { 
    icon: Heart, 
    title: 'Passion', 
    description: 'Development excite me — every project is a chance to craft something I genuinely love.' 
  },
];

const AboutPage = () => {
  const pageRef = useRef(null);
  const onMobile = useIsMobile()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".about-hero", start: "top 50%" } });
      gsap.fromTo('.logo-frame', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: '.about-content', start: onMobile ? 'top 30%' : 'top 20%' } });
      // gsap.fromTo('.value-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: '.values-grid', start: 'top 85%' } });
      gsap.fromTo('.abt-hero', { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.abt-hero', start: 'top 60%' } });
    }, pageRef);
    return () => ctx.revert();
  }, []);



  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="relative abt-hero py-32 min-h-[100vh]">
        <FloatingOrbs variant="hero" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="about-hero max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">About Me</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mt-4 mb-6">
              I Build <span className="text-glow text-primary">Digital Dreams</span>
            </h1>
            <p class="text-xl text-muted-foreground leading-relaxed">
              I started coding out of pure curiosity, and it quickly became my obsession.
              Today, I design and build digital products that bring ideas to life.
              When I’m not coding, you’ll find me exploring new tech trends, sketching ideas, or learning something new every day.
            </p>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo Frame - Placeholder for future logo */}
          <div className="  logo-frame flex items-center justify-center mb-4 mt-12">
            <div className="overflow-hidden relative md:w-52 md:h-52 w-40 h-40 rounded-full glass-card flex items-center justify-center glow-purple group hover:scale-105 transition-transform duration-500">
              <img src={Pfp} className='object-cover w-full h-full' alt="" />
            </div>
          </div>

            {/* Values */}
            <div>
              <SectionHeader kodac={true} label="Why Me" title="Why Choose" description="Partner with a person that's dedicated to your digital success." />
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
        <Link to="/contact" className="hero-cta btn-neon block mt-12 text-center w-[70%] m-auto">Get Your Project Done</Link>
      </section>
    </main>
  );
};

export default AboutPage;
