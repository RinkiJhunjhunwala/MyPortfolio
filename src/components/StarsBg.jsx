import { useEffect, useRef } from "react";

export default function StarsBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#f5f3ce";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }
      }
      requestAnimationFrame(animate);
    }

    resize();
    initStars();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }}
    />
  );
}
