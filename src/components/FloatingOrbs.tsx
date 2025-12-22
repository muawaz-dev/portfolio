/* ==========================================
   FLOATING ORBS COMPONENT
   Animated background orbs for visual depth
   ========================================== */

interface FloatingOrbsProps {
  variant?: 'hero' | 'section' | 'minimal';
}

const FloatingOrbs = ({ variant = 'section' }: FloatingOrbsProps) => {
  const orbs = {
    hero: [
      { color: 'orb-purple', size: 'w-[500px] h-[500px]', position: '-top-64 -left-64', delay: '0s' },
      { color: 'orb-blue', size: 'w-96 h-96', position: 'top-1/3 -right-48', delay: '-2s' },
      { color: 'orb-pink', size: 'w-72 h-72', position: 'bottom-20 left-1/4', delay: '-4s' },
      { color: 'orb-purple', size: 'w-64 h-64', position: '-bottom-32 right-1/4', delay: '-6s' },
    ],
    section: [
      { color: 'orb-purple', size: 'w-80 h-80', position: '-top-40 -right-40', delay: '0s' },
      { color: 'orb-blue', size: 'w-64 h-64', position: 'bottom-0 -left-32', delay: '-3s' },
    ],
    minimal: [
      { color: 'orb-purple', size: 'w-48 h-48', position: 'top-1/2 -right-24', delay: '-2s' },
    ],
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs[variant].map((orb, index) => (
        <div
          key={index}
          className={`orb ${orb.color} ${orb.size} ${orb.position} animate-orb`}
          style={{ animationDelay: orb.delay }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
