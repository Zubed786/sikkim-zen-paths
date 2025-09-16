import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// -------------------------
// Ripple Effect for text
// -------------------------
document.querySelectorAll('.text-ripple').forEach((el) => {
  el.addEventListener('mouseenter', (e: MouseEvent) => {
    const target = el as HTMLElement;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    target.appendChild(ripple);

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple-animate');

    // Remove ripple after animation
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});
