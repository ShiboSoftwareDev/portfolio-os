import { Container, Sprite, Stage, useTick } from "@pixi/react";
import { useState } from "react";

const Particle = (
  { particleImage, size }: {
    particleImage: string;
    size: "mobile" | "desktop";
  },
) => {
  const width = size === "desktop" ? 2200 : 1100;
  const height = size === "desktop" ? 2000 : 1000;
  const [position, setPosition] = useState({
    x: Math.random() * width,
    y: Math.random() * height,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
  });

  useTick(() => {
    setPosition((prev) => ({
      ...prev,
      x: (prev.x + prev.speedX + width) % width,
      y: (prev.y + prev.speedY + height) % height,
    }));
  });

  return (
    <Sprite
      image={particleImage}
      x={position.x}
      y={position.y}
      scale={1}
    />
  );
};

const PixiScene = (
  { particleImage, size }: {
    particleImage: string;
    size: "mobile" | "desktop";
  },
) => {
  const [visible, setVisible] = useState(true);
  return (
    <Stage
      onTouchStart={() => setVisible(false)}
      onTouchEnd={() => setVisible(true)}
      onMouseOver={() => setVisible(false)}
      onMouseOut={() => setVisible(true)}
      width={size === "desktop" ? 2200 : 1100}
      className="absolute -top-10 -left-10"
      height={size === "desktop" ? 2000 : 1000}
      options={{ backgroundAlpha: 0 }}
    >
      {visible &&
        (
          <Container>
            {[...Array(size === "desktop" ? 20 : 10)].map((_, i) => (
              <Particle particleImage={particleImage} size={size} key={i} />
            ))}
          </Container>
        )}
    </Stage>
  );
};

export default PixiScene;
