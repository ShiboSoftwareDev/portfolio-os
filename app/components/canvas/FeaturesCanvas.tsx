import React, { useEffect, useState } from "react";
import { TextStyle } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";

const FeaturesCanvas = () => {
  const [bunnyRotation, setBunnyRotation] = useState(0);

  const dragonURL = "images/green-dragon.png";
  const features = [
    "Open source",
    "Desktop + Mobile versions",
    "Customisable themes and wallpapers",
    "Can add any kind of application as a react component",
    "Simple architecture",
  ];

  useEffect(() => {
    setInterval(() => {
      setBunnyRotation((bunnyRotation) => bunnyRotation + 0.05);
    }, 50);
  }, []);
  console.log(bunnyRotation);

  const featureTextComponents = features.map((text, index) => {
    const x = 50;
    const y = 10 + index * 50;
    return (
      <Container key={text} x={x} y={y}>
        <Sprite
          anchor={0.5}
          rotation={bunnyRotation + (index / features.length) * 2}
          image={dragonURL}
          x={x - 80}
          y={y / 10000 + 12}
        />
        <Text
          resolution={2}
          text={text}
          style={
            new TextStyle({
              fontFamily: "robotic",
              fontSize: 20,
              align: "center",
              fill: "0xffffff",
              letterSpacing: 2,
            })
          }
        />
      </Container>
    );
  });
  return (
    <Stage
      width={700}
      height={600}
      options={{ backgroundAlpha: 0, resizeTo: window }}
    >
      {featureTextComponents}
    </Stage>
  );
};

export default FeaturesCanvas;
