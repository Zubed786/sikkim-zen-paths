import React, { useEffect } from "react";

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text, className }) => {
  useEffect(() => {
    // Add staggered animation delays
    const spans = document.querySelectorAll(".wave-text span");
    spans.forEach((span, i) => {
      (span as HTMLElement).style.animationDelay = `${i * 0.07}s`;
    });
  }, [text]);

  return (
    <h1 className={`wave-text flex gap-1 ${className || ""}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}

      <style>{`
        .wave-text span {
          display: inline-block;
        }

        .wave-text:hover span {
          animation: wave 0.6s ease-in-out;
        }

        @keyframes wave {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </h1>
  );
};

export default WaveText;
