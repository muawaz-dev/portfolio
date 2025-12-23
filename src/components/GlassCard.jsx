/* ==========================================
   GLASS CARD COMPONENT
   Reusable glassmorphic card with hover effects
   ========================================== */

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        glass-card p-6 md:p-8
        ${hover ? 'shadow-sm transition-all duration-500 hover:-translate-y-2 hover:glow-purple cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
