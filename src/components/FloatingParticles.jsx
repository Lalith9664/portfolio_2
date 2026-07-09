import React, { useEffect, useRef } from "react";

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particlesArray = [];

    // Mouse coordinates ref to avoid react state updates in animation loop
    const mouse = {
      x: null,
      y: null,
      radius: 120, // Interaction radius
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.6;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.baseSpeedX = this.speedX;
        this.baseSpeedY = this.speedY;
      }

      update(isLightMode) {
        // Core float update
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction (repulsion)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            // Calculate force direction
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;

            // Stronger push the closer the mouse is
            const force = (mouse.radius - distance) / mouse.radius;
            const push = force * 1.2;

            this.x += forceDirectionX * push;
            this.y += forceDirectionY * push;

            // Slightly decelerate back to normal speed
            this.speedX = this.baseSpeedX + forceDirectionX * push * 0.1;
            this.speedY = this.baseSpeedY + forceDirectionY * push * 0.1;
          } else {
            // Return to normal speed slowly
            this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
            this.speedY += (this.baseSpeedY - this.speedY) * 0.05;
          }
        } else {
          // Return to normal speed slowly
          this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
          this.speedY += (this.baseSpeedY - this.speedY) * 0.05;
        }

        // Wrap around screen edge
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw(isLightMode) {
        ctx.fillStyle = isLightMode
          ? `rgba(13, 148, 136, ${this.size * 0.15 + 0.15})` // Faint teal
          : `rgba(16, 185, 129, ${this.size * 0.12 + 0.08})`; // Faint emerald

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      // Density based on window resolution
      const numberOfParticles = Math.min(
        Math.floor((canvas.width * canvas.height) / 12000),
        75,
      );
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLightMode = document.documentElement.classList.contains("light");

      // Draw and update particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(isLightMode);
        particlesArray[i].draw(isLightMode);

        // Draw lines between close particles
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 12100) { // 110 * 110 = 12100
            const distance = Math.sqrt(distSq);
            const opacityMultiplier = isLightMode ? 0.09 : 0.055;
            ctx.beginPath();
            ctx.strokeStyle = isLightMode
              ? `rgba(13, 148, 136, ${(1 - distance / 110) * opacityMultiplier})`
              : `rgba(20, 184, 166, ${(1 - distance / 110) * opacityMultiplier})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-80"
    />
  );
}
