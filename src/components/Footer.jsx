/* ==========================================
   FOOTER COMPONENT
   Mini navigation, social links, floating particles
   ========================================== */

import { Link } from 'react-router-dom';
import { GithubLogoIcon, LinkedinLogoIcon, InstagramLogoIcon, EnvelopeIcon } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: GithubLogoIcon, href: 'https://github.com/muawaz-dev', label: 'GitHub' },
  { icon: LinkedinLogoIcon, href: 'https://www.linkedin.com/in/muawaz-ahmad/', label: 'LinkedIn' },
  { icon: InstagramLogoIcon, href: 'https://www.instagram.com/m.u.a.w.a.z/', label: 'Twitter' },
{
  icon: EnvelopeIcon,href: 'https://mail.google.com/mail/?view=cm&fs=1&to=muawaz8@gmail.com',label: 'Email'
}
];

const Footer = () => {
  const footerRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Animate footer content on scroll
  //     gsap.fromTo(
  //       '.footer-content',
  //       { opacity: 0, y: 60, filter: 'blur(10px)' },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         filter: 'blur(0px)',
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: footerRef.current,
  //           start: 'top 90%',
  //         },
  //       }
  //     );

  //     // Animate social icons with stagger
  //     gsap.fromTo(
  //       '.social-icon',
  //       { opacity: 0, scale: 0.8 },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.4,
  //         stagger: 0.1,
  //         ease: 'back.out(1.7)',
  //         scrollTrigger: {
  //           trigger: footerRef.current,
  //           start: 'top 85%',
  //         },
  //       }
  //     );
  //   }, footerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <footer ref={footerRef} className="relative py-16 border-t border-border/20 overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-purple w-64 h-64 -bottom-32 left-1/4 animate-orb opacity-30" />
      <div className="orb orb-blue w-48 h-48 -bottom-24 right-1/3 animate-orb opacity-20" style={{ animationDelay: '-3s' }} />

      <div className="footer-content container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-foreground">
              Muawaz<span className="ml-2 text-primary">Ahmad</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 rounded-full glass hover:glow-purple transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  weight="light"
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
