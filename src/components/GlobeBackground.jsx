import { useEffect, useRef } from 'react';

const GlobeBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const gridSize = 50; // Size of each grid cell
    const interactionRadius = 200; // Radius of mouse interaction

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const getColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        // Very subtle base grid
        baseColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
        // Darker on interaction
        hoverColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
        // Intersection dots
        dotBase: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        dotHover: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
      };
    };

    const drawGrid = (time) => {
      ctx.clearRect(0, 0, width, height);

      const colors = getColors();
      const scrollY = window.scrollY * 0.1;

      // Apply subtle parallax offset
      offsetRef.current.x = Math.sin(time * 0.0002) * 10;
      offsetRef.current.y = scrollY;

      // Calculate grid boundaries with infinite extension
      const startX = -gridSize - (offsetRef.current.x % gridSize);
      const startY = -gridSize - (offsetRef.current.y % gridSize);
      const cols = Math.ceil(width / gridSize) + 3;
      const rows = Math.ceil(height / gridSize) + 3;

      // Draw vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = startX + i * gridSize;

        // Check distance to mouse for this line
        const distToMouse = Math.abs(x - mouseRef.current.x);
        const intensity = Math.max(0, 1 - distToMouse / interactionRadius);

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);

        if (intensity > 0) {
          // Interpolate between base and hover color
          const alpha = 0.03 + intensity * 0.12;
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          ctx.strokeStyle = isDark
            ? `rgba(255, 255, 255, ${alpha})`
            : `rgba(0, 0, 0, ${alpha})`;
          ctx.lineWidth = 1 + intensity * 0.5;
        } else {
          ctx.strokeStyle = colors.baseColor;
          ctx.lineWidth = 1;
        }

        ctx.stroke();
      }

      // Draw horizontal lines
      for (let j = 0; j <= rows; j++) {
        const y = startY + j * gridSize;

        // Check distance to mouse for this line
        const distToMouse = Math.abs(y - mouseRef.current.y);
        const intensity = Math.max(0, 1 - distToMouse / interactionRadius);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);

        if (intensity > 0) {
          const alpha = 0.03 + intensity * 0.12;
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          ctx.strokeStyle = isDark
            ? `rgba(255, 255, 255, ${alpha})`
            : `rgba(0, 0, 0, ${alpha})`;
          ctx.lineWidth = 1 + intensity * 0.5;
        } else {
          ctx.strokeStyle = colors.baseColor;
          ctx.lineWidth = 1;
        }

        ctx.stroke();
      }

      // Draw intersection dots
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = startX + i * gridSize;
          const y = startY + j * gridSize;

          // Calculate distance from mouse
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const intensity = Math.max(0, 1 - distance / interactionRadius);

          // Base dot size with interaction enlargement
          const dotSize = 1.5 + intensity * 3;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);

          if (intensity > 0) {
            const alpha = 0.05 + intensity * 0.25;
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            ctx.fillStyle = isDark
              ? `rgba(255, 255, 255, ${alpha})`
              : `rgba(0, 0, 0, ${alpha})`;
          } else {
            ctx.fillStyle = colors.dotBase;
          }

          ctx.fill();
        }
      }

      // Draw a larger glow around mouse position
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, interactionRadius
        );

        gradient.addColorStop(0, isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)');
        gradient.addColorStop(0.5, isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, interactionRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Initialize
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationRef.current = requestAnimationFrame(drawGrid);

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      // Theme changed, grid will update colors on next frame
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} id="globe-canvas" />;
};

export default GlobeBackground;
