import { Container, Sprite, Stage, useTick } from "@pixi/react";
import { useState } from "react";

const Particle = ({ particleImage }: { particleImage: string }) => {
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
      image={particleImage}
      x={position.x}
      y={position.y}
      scale={1}
    />
  );
};

const PixiScene = ({ particleImage }: { particleImage: string }) => {
  const [visible, setVisible] = useState(true);
  return (
    <Stage
      onMouseOver={() => setVisible(false)}
      onMouseOut={() => setVisible(true)}
      width={2100}
      className="absolute -top-10 -left-10"
      height={2000}
      options={{ backgroundAlpha: 0 }}
    >
      {visible &&
        (
          <Container>
            {[...Array(20)].map((_, i) => (
              <Particle particleImage={particleImage} key={i} />
            ))}
          </Container>
        )}
    </Stage>
  );
};

export default PixiScene;
