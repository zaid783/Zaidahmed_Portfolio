import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX - 5}px`;
      dot.style.top = `${mouseY - 5}px`;

      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' ||
                           target.tagName === 'BUTTON' ||
                           target.closest('a') ||
                           target.closest('button') ||
                           target.style.cursor === 'pointer';

      if (isInteractive && !isHovering) {
        isHovering = true;
        dot.classList.add('cursor-hover');
        outline.classList.add('cursor-outline-hover');
      } else if (!isInteractive && isHovering) {
        isHovering = false;
        dot.classList.remove('cursor-hover');
        outline.classList.remove('cursor-outline-hover');
      }

      createTrail(mouseX, mouseY);
    };

    const handleMouseDown = () => {
      dot.classList.add('cursor-click');
      outline.classList.add('cursor-click');
      setTimeout(() => {
        dot.classList.remove('cursor-click');
        outline.classList.remove('cursor-click');
      }, 300);
    };

    const createTrail = (x: number, y: number) => {
      if (Math.random() > 0.7) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${x - 3}px`;
        trail.style.top = `${y - 3}px`;
        document.body.appendChild(trail);

        trailsRef.current.push(trail);

        setTimeout(() => {
          trail.remove();
          trailsRef.current = trailsRef.current.filter(t => t !== trail);
        }, 500);
      }
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      outline.style.left = `${outlineX - 20}px`;
      outline.style.top = `${outlineY - 20}px`;

      requestAnimationFrame(animateOutline);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    animateOutline();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      trailsRef.current.forEach(trail => trail.remove());
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
