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
  { image: project1, title: 'E-Commerce Platform', description: 'Modern shopping experience with seamless checkout.', tech: ['React', 'Node.js', 'Stripe'] },
  { image: project2, title: 'SaaS Dashboard', description: 'Analytics dashboard with real-time data visualization.', tech: ['TypeScript', 'D3.js', 'PostgreSQL'] },
  { image: project3, title: 'Mobile Banking App', description: 'Secure fintech solution with biometric authentication.', tech: ['React Native', 'AWS', 'GraphQL'] },
  { image: project4, title: 'AI Content Platform', description: 'AI-powered content creation and management system.', tech: ['Next.js', 'OpenAI', 'MongoDB'] },
  { image: project5, title: 'Healthcare Portal', description: 'Patient management system with telehealth features.', tech: ['Vue.js', 'Python', 'HIPAA'] },
  { image: project6, title: 'Real Estate App', description: 'Property listing platform with virtual tours.', tech: ['React', 'Three.js', 'Firebase'] },
];

const ProjectsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="pt-24 pb-20">
      <FloatingOrbs variant="hero" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader label="Portfolio" title="Our Projects" description="Explore our latest work and see how we bring ideas to life." />
        
        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="project-card glass-card overflow-hidden group hover:-translate-y-2 hover:glow-purple transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                  View Project <ArrowRight size={16} weight="light" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
