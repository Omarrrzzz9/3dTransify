import { useState, useRef, useEffect } from 'react';

interface ImageData {
  src: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  rotation: number;
}

interface WaterRevealGalleryProps {
  images: string[];
  onImageClick?: (index: number) => void;
}

export default function WaterRevealGallery({ images, onImageClick }: WaterRevealGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealPosition, setRevealPosition] = useState<{ x: number; y: number } | null>(null);
  const [imagePositions, setImagePositions] = useState<ImageData[]>([]);

  useEffect(() => {
    if (images.length === 0) return;

    const positions: ImageData[] = images.map((src, index) => {
      const cols = 4;
      const row = Math.floor(index / cols);
      const col = index % cols;

      const baseX = 12 + col * 24 + (Math.random() - 0.5) * 3;
      const baseY = 10 + row * 28 + (Math.random() - 0.5) * 3;

      return {
        src,
        position: { x: baseX, y: baseY },
        size: { width: 18, height: 18 * (0.9 + Math.random() * 0.2) },
        rotation: (Math.random() - 0.5) * 8
      };
    });

    setImagePositions(positions);
  }, [images]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setRevealPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setRevealPosition(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !onImageClick) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imagePositions.forEach((imgData, index) => {
      const dx = x - imgData.position.x;
      const dy = y - imgData.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 10) {
        onImageClick(index);
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[800px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {imagePositions.map((imgData, index) => {
        const isRevealed = revealPosition
          ? Math.sqrt(
              Math.pow(revealPosition.x - imgData.position.x, 2) +
              Math.pow(revealPosition.y - imgData.position.y, 2)
            ) < 15
          : false;

        return (
          <div
            key={index}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${imgData.position.x}%`,
              top: `${imgData.position.y}%`,
              width: `${imgData.size.width}%`,
              height: `${imgData.size.height}%`,
              transform: `translate(-50%, -50%) rotate(${imgData.rotation}deg) ${isRevealed ? 'scale(1.05)' : 'scale(1)'}`,
            }}
          >
            <img
              src={imgData.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-sm shadow-2xl transition-all duration-300"
              style={{
                filter: isRevealed ? 'blur(0px) brightness(1)' : 'blur(8px) brightness(0.3)',
              }}
            />
          </div>
        );
      })}

      <div className="absolute top-8 left-8 text-white/60 text-sm font-light pointer-events-none">
        Move your cursor to reveal images
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>
    </div>
  );
}
