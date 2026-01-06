/* ==========================================
   SPLINE BACKGROUND COMPONENT
   3D Spline embed for hero sections
   ========================================== */
import Animation from "../assets/hero_animation.mp4"
import Image from "../assets/hero_bg_image.png"
const SplineBackground = ({ className = '',onLoaded,onMobile }) => {
  
  return (
   <div className={`absolute inset-0 overflow-hidden ${className}`}>
    { onMobile? <img src={Image} className="absolute w-full h-full object-cover inset-0 brightness-125" alt="" /> :
      <video
        src={Animation}
        onCanPlayThrough={onLoaded}
        className="absolute w-full h-full object-cover inset-0 brightness-125"
        autoPlay
        muted
      />}
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
    </div>
  );
};

export default SplineBackground;
