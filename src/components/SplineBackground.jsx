/* ==========================================
   SPLINE BACKGROUND COMPONENT
   3D Spline embed for hero sections
   ========================================== */

const SplineBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <iframe
        src="https://my.spline.design/abstractnirvana-aOe2n7lJgIpBNE2ZdFQ7PkiY/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 scale-125 brightness-150"
        title="3D Background"
        loading="lazy"
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
    </div>
  );
};

export default SplineBackground;
