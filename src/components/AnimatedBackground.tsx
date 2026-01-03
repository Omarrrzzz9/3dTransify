import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const numPoints = 50;
    const maxDistance = 150;

    const initPoints = () => {
      pointsRef.current = [];
      for (let i = 0; i < numPoints; i++) {
        pointsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    initPoints();

    const findNearestPoint = (fromIndex: number): number | null => {
      let nearest = null;
      let minDistance = maxDistance;

      for (let i = 0; i < pointsRef.current.length; i++) {
        if (i === fromIndex) continue;

        const dx = pointsRef.current[fromIndex].x - pointsRef.current[i].x;
        const dy = pointsRef.current[fromIndex].y - pointsRef.current[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
          minDistance = distance;
          nearest = i;
        }
      }

      return nearest;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
        ctx.fill();
      });

      connectionsRef.current = connectionsRef.current.filter((connection) => {
        connection.progress += connection.speed;

        if (connection.progress > 1) {
          return false;
        }

        const fromPoint = pointsRef.current[connection.from];
        const toPoint = pointsRef.current[connection.to];

        const dx = toPoint.x - fromPoint.x;
        const dy = toPoint.y - fromPoint.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const currentX = fromPoint.x + dx * connection.progress;
        const currentY = fromPoint.y + dy * connection.progress;

        const opacity = (1 - distance / maxDistance) * 0.5;

        ctx.beginPath();
        ctx.moveTo(fromPoint.x, fromPoint.y);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        return true;
      });

      if (Math.random() < 0.3) {
        const randomPointIndex = Math.floor(Math.random() * pointsRef.current.length);
        const targetIndex = findNearestPoint(randomPointIndex);

        if (targetIndex !== null) {
          connectionsRef.current.push({
            from: randomPointIndex,
            to: targetIndex,
            progress: 0,
            speed: 0.03 + Math.random() * 0.04,
          });
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
