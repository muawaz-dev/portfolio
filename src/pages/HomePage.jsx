/* ==========================================
   HOMEPAGE
   Hero, Services, Why Choose Us sections
   ========================================== */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Rocket, Shield, Users, Sparkle } from '@phosphor-icons/react';
import SplineBackground from '@/components/SplineBackground';
import FloatingOrbs from '@/components/FloatingOrbs';
import SectionHeader from '@/components/SectionHeader';
import GlassCard from '@/components/GlassCard';
import { useIsMobile } from '../hooks/use-mobile.jsx';
import AboutPage from './AboutPage.jsx';
import Pfp from "../assets/muawaz.png"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import js from "../assets/skills/javascript.png"
import ts from "../assets/skills/typescript.png"
import nodeJs from "../assets/skills/node-js.png"
import react from "../assets/skills/react.png"
import nextJs from "../assets/skills/next-js.png"
import python from "../assets/skills/python.png"
import tailwindCss from "../assets/skills/tailwind-css.png"
import mongoDb from "../assets/skills/mongodb.png"
import express from "../assets/skills/express-js.png"
gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Code, title: 'Frontend Development', description: 'Custom web frontends and web applications built with cutting-edge technologies.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that captivate and convert users.' },
  { icon: Code, title: 'Backend Development', description: 'Secure and optimized backends tailored to custom needs.' },
];
const skills = [
  { icon: html, title: 'HTML' },
  { icon: css, title: 'CSS' },
  { icon: tailwindCss, title: 'Tailwind CSS' },
  { icon: js, title: 'JavaScript' },
  { icon: ts, title: 'TypeScript'},
  { icon: python, title: 'Python'},
  { icon: react, title: 'React'},
  { icon: nextJs, title: 'Next.js'},
  { icon: nodeJs, title: 'Node.js'},
  { icon: express, title: 'Express.js'},
  { icon: mongoDb, title: 'MongoDB'},
];

const reasons = [
  { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security for your digital assets.' },
  { icon: Users, title: 'Dedicated Team', description: 'Expert developers committed to your success.' },
  { icon: Sparkle, title: 'Innovation First', description: 'Cutting-edge solutions that set you apart.' },
];

const HomePage = () => {
  const heroRef = useRef(null);
  const onMobile = useIsMobile()
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [pfpLoaded, setPfpLoaded] = useState(false);
  // To handle the loading state of the spline animation
  // useEffect(() => {
  //   console.log(splineLoaded)
  //   if (splineLoaded) {
  //     console.log(window.scrollY)
  //     if (window.scrollY !== 0) {
  //       gsap.fromTo(
  //         ".spline",
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           duration: 1.2,
  //           delay: 1.2,
  //           scrollTrigger: {
  //             trigger: "body",   // element to watch
  //             start: "top top",     // when the top of .spline hits the top of viewport     // only at the very top
  //             toggleActions: "play none none none" // play once
  //           }
  //         }

  //       )
  //     }

  //     else {
  //       gsap.fromTo(
  //         ".spline",
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           duration: 1.2,
  //           delay: 1
  //         })
  //     }
  //   }

  // }, [splineLoaded])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.8 });
      // gsap.fromTo('.services-section', { filter: 'blur(6px)' }, { filter: 'blur(0px)', duration: 0.6, ease: 'power3.out', delay: 0.2 }); gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 });
      gsap.fromTo('.hero-cta', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.8 });
      gsap.registerPlugin(ScrollTrigger);
      //To start spline animation after load

      if (!onMobile) {
        gsap.fromTo('.service-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, scrollTrigger: { trigger: '.services-section', start: 'top 1%' } });
        gsap.fromTo('.reason-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, scrollTrigger: { trigger: '.reasons-section', start: 'top 1%' } });
      }
      else {
        // Service cards
        gsap.utils.toArray('.service-card').forEach(card => {
          gsap.fromTo(card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.2,
              scrollTrigger: {
                trigger: card,
                start: 'top 55%',
              }
            }
          );
        });

        // Reason cards
        gsap.utils.toArray('.reason-card').forEach(card => {
          gsap.fromTo(card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              scrollTrigger: {
                trigger: card,
                start: 'top 55%',
              }
            }
          );
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef} >
      {/* Hero Section */}
      <section className="relative h-screen flex pt-20 lg:pt-6 sm:items-center justify-center overflow-hidden">
        <SplineBackground onLoaded={()=>setSplineLoaded(true)} className={`spline ${splineLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} />
        {/* <img src={Pfp} alt="" /> */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="logo-frame flex items-center justify-center mb-4 mt-12 sm:mt-0">
            <div className="overflow-hidden relative md:w-52 md:h-52 w-40 h-40 rounded-full glass-card flex items-center justify-center group hover:scale-105 transition-transform duration-500">
              <img src={Pfp} onLoad={()=>setPfpLoaded(true)} className={`object-cover w-full h-full ${pfpLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}  alt="" />
            </div>
          </div>
          <h1 className=" hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#FF3131] to-[#A65EED]'>Muawaz</span> <span className="">Ahmad</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-8">
            I am a passionate fullstack developer, creating end to end modern web solutions
          </p>
          <Link to="/contact" className="opacity-0 hero-cta btn-neon inline-block">Hire Me</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section relative py-32 gradient-mesh">
        <div className="container mx-auto px-6">
          <SectionHeader label="What I Do" title="My Services" description="I deliver exceptional web solutions." />
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

      {/* Skills Section */}
      <section className="services-section relative py-32 gradient-mesh">
        <div className="container mx-auto px-6">
          <SectionHeader label="My Skills" title="My Tech Stack" description="I am skilled in the following tech." />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
            {skills.map((skill, i) => (
              <GlassCard key={i} className="service-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-transparent flex items-center justify-center">
                  <img src={skill.icon} size={32} weight="light" className={`text-primary`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      <AboutPage />
    </main>
  );
};

export default HomePage;
