"use client";
import { useEffect } from "react";

const GlowingEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const glowEffect = document.getElementById("glow-effect");
      if (!glowEffect) return;

      const x = event.clientX;
      const y = event.clientY;

      glowEffect.style.left = `${x - 100}px`; // Adjust the values based on the desired radius
      glowEffect.style.top = `${y - 100}px`;
      glowEffect.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      const glowEffect = document.getElementById("glow-effect");
      if (!glowEffect) return;

      glowEffect.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="glow-effect"
      className="absolute w-60 h-60 rounded-full bg-Text-Color/[0.01] blur-lg transition-opacity ease-linear opacity-0"
    ></div>
  );
};

export default GlowingEffect;
