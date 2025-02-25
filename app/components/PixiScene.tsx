import { Container, Sprite, Stage, useTick } from "@pixi/react";
import { useState } from "react";

const Particle = () => {
  const [position, setPosition] = useState({
    x: Math.random() * 2100,
    y: Math.random() * 2000,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
  });

  useTick(() => {
    setPosition((prev) => ({
      ...prev,
      x: (prev.x + prev.speedX + 2100) % 2100,
      y: (prev.y + prev.speedY + 2000) % 2000,
    }));
  });

  return (
    <Sprite
      image="/images/dragonfly.png"
      x={position.x}
      y={position.y}
      scale={1}
    />
  );
};

const PixiScene = () => {
  return (
    <Stage
      width={2100}
      className="absolute -top-10 -left-10"
      height={2000}
      options={{ backgroundAlpha: 0 }}
    >
      <Container>
        {[...Array(20)].map((_, i) => <Particle key={i} />)}
      </Container>
    </Stage>
  );
};

export default PixiScene;
