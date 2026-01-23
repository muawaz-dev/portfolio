/* ==========================================
   PROJECTS PAGE
   Bento-style horizontal scroll cards
   ========================================== */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from '@phosphor-icons/react';
import FloatingOrbs from '@/components/FloatingOrbs';
import SectionHeader from '@/components/SectionHeader';

import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: project1,link:"https://video-tube-frontend.netlify.app/",title: 'VideoTube-Video Streaming App',description: 'A full-stack YouTube clone application replicating core features such as video playback, user authentication, comments, likes, views, subscriptions, video management and profile management. It demonstrates modern web development practices with a responsive UI.', tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Cloudinary']
  },

  { image: project2,link:"https://py-master.netlify.app/", title: 'PyMaster – Python Course Platform', description: 'A modern e-learning app for selling Python courses with authentication, Stripe payments, and 30-day refund policy.', tech: ['React', 'Tailwind CSS', 'Node.js/Express.js', 'MongoDB', 'Stripe'] },
  { image: project3,link:"https://aqua-fix.netlify.app/",title: 'AquaFix - Plumbing Services', description: 'A modern, responsive and clean landing page with booking funcionality.', tech: ['React', 'Tailwind CSS', 'Calendly'] },
  // { image: project4, title: "The Gentelmen's Cut - Barber Shop", description: 'A full-featured barber shop web app with online booking and gallery showcase.', tech: ['React', 'Tailwind CSS', 'Calendly'] },
  // { image: project5, title: 'Healthcare Portal', description: 'Patient management system with telehealth features.', tech: ['Vue.js', 'Python', 'HIPAA'] },
  // { image: project6, title: 'Real Estate App', description: 'Property listing platform with virtual tours.', tech: ['React', 'Three.js', 'Firebase'] },
];

const ProjectsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' } });
      gsap.fromTo('.project-hero', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
      // gsap.fromTo('.projects-grid', { filter: 'blur(6px)' }, {  filter: 'blur(0px)', duration: 0.6, ease: 'power3.out', delay: 0.2 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="pt-24 pb-20  transition-all ">
      <FloatingOrbs variant="hero" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader className="project-hero" label="Portfolio" title="My Projects" description="Explore my latest work and see how I bring ideas to life." />

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="project-card opacity-0 glass-card overflow-hidden hover:glow-purple shadow-sm transition-all duration-1000">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <a
                target='_blank'
                href={project.link}
                className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                  View Project <ArrowRight size={16} weight="light" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
