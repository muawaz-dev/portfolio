/* ==========================================
   GLASS CARD COMPONENT
   Reusable glassmorphic card with hover effects
   ========================================== */

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <div
      className={`
        glass-card p-6 md:p-8
        ${hover ? 'transition-all duration-500 hover:-translate-y-2 hover:glow-purple cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
