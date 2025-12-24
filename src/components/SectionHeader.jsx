/* ==========================================
   SECTION HEADER COMPONENT
   Reusable animated section titles
   ========================================== */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ label, title, description,className, align = 'center',kodac }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-header-content',
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={headerRef}
      className={`${className} section-header-content mb-24 ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left'
      }`}
    >
      {label && (
        <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className={` text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground`}>
        <span>
          {title}
        </span>
        <span className={`${kodac?'bg-clip-text text-transparent bg-gradient-to-r from-[#FF3131] to-[#A65EED]':'hidden'} ml-3`}>Kodac</span>
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
