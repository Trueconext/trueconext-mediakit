import { useEffect, useState } from 'react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isMobile && e.touches.length > 0) {
        const x = (e.touches[0].clientX / window.innerWidth) * 100;
        const y = (e.touches[0].clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main cursor-following gradient */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-[800ms] ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Secondary pulse effect */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 transition-all duration-[1200ms] ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Static ambient lights */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
