
import { useEffect, useState } from "react";

export const CosmicBackground = () => {
  const [stars, setStars] = useState([]);
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    generateStars();
    generateAsteroids();

    // Handling window resize for making it more convient
    // for other devices
    const handleResize = () => {
      generateStars();
      generateAsteroids();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
      // (window.innerWidth) and (window.innerHeight) gives brower's
      // visible area  in pixels so if 1920×1080 then 1920 * 1080 = 2,073,600
      // and 2,073,600 / 10,000 = 207.36 and we take floor
      // of it so 207 stars are visible on screen
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        twinkleSpeed: Math.random() * 3 + 2,
      });
    }

    setStars(newStars);
  };

  const generateAsteroids = () => {
    const asteroidCount = 15;
    const newAsteroids = [];

    const colorPalette = [
      ['#FF6B6B', '#FFD93D'],
      ['#4ECDC4', '#1A535C'],
      ['#C70039', '#FFC300'],
      ['#5B21B6', '#E9D5FF'],
      ['#00BFFF', '#87CEFA'],
      ['#F37A7A', '#F9F7E0'],
      ['#FF8C00', '#FFA07A'],
      ['#9333EA', '#A78BFA'],
      ['#FF1493', '#FF69B4'],
      ['#00FA9A', '#98FB98'],
    ];

    for (let i = 0; i < asteroidCount; i++) {
      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const size = Math.random() * 15 + 4;

      newAsteroids.push({
        id: i,
        x: Math.random() * 120 - 10,
        y: Math.random() * 120 - 10,
        size: size,
        rotation: Math.random() * 360,
        speed: Math.random() * 30 + 10,
        delay: Math.random() * 8,
        colorStart: randomColor[0],
        colorEnd: randomColor[1],
        glowIntensity: Math.random() * 0.6 + 0.4,
        pulseSpeed: Math.random() * 2 + 1,
      });
    }

    setAsteroids(newAsteroids);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* stars layer */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animation: `
              pulse-subtle ${star.animationDuration}s ease-in-out infinite,
              twinkle ${star.twinkleSpeed}s ease-in-out infinite
            `,
            boxShadow: `0 0 ${star.size * 2}px ${star.size / 2}px rgba(255, 255, 255, ${star.opacity * 0.3})`,
          }}
        />
      ))}

      {/* asteroids layer */}
      {asteroids.map((asteroid) => (
        <div
          key={`asteroid-${asteroid.id}`}
          className="absolute rounded-full asteroid cosmic-glow"
          style={{
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            background: `linear-gradient(${asteroid.rotation}deg, ${asteroid.colorStart}, ${asteroid.colorEnd})`,
            animation: `
              asteroid-float ${asteroid.speed}s linear ${asteroid.delay}s infinite,
              cosmic-pulse ${asteroid.pulseSpeed}s ease-in-out infinite
            `,
            opacity: Math.random() * 0.7 + 0.3,
            filter: `brightness(${asteroid.glowIntensity}) drop-shadow(0 0 ${asteroid.size / 2}px ${asteroid.colorStart}33)`,
            transform: `rotate(${asteroid.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};