/* ==========================================
   PRELOADER COMPONENT
   Animated loading screen with progress bar
   ========================================== */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo fade in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    );

    // Animate progress bar
    tl.to(
      progressRef.current,
      {
        width: '100%',
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          setProgress(Math.round(this.progress() * 100));
        },
      },
      '-=0.3'
    );

    // Fade out preloader
    tl.to(
      preloaderRef.current,
      {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(10px)',
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          onComplete();
        },
      },
      '+=0.2'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Background orbs */}
      <div className="orb orb-purple w-96 h-96 -top-48 -left-48 animate-orb" />
      <div className="orb orb-blue w-64 h-64 top-1/2 -right-32 animate-orb" style={{ animationDelay: '-2s' }} />
      <div className="orb orb-pink w-48 h-48 bottom-20 left-1/4 animate-orb" style={{ animationDelay: '-4s' }} />

      {/* Content */}
      <div ref={logoRef} className="relative z-10 flex flex-col items-center">
        <h1 className="preloader-logo">Kodac</h1>
        <p className="text-muted-foreground text-lg mt-2 tracking-widest uppercase">Solutions</p>
        
        {/* Progress bar */}
        <div className="progress-bar-container">
          <div ref={progressRef} className="progress-bar" />
        </div>
        
        {/* Percentage */}
        <p className="text-muted-foreground text-sm mt-4 font-light">{progress}%</p>
      </div>
    </div>
  );
};

export default Preloader;
