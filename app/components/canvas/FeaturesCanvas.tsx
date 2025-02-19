import React, { useEffect, useState } from "react";
import { TextStyle } from "pixi.js";
import { Container, Sprite, Stage, Text } from "@pixi/react";

const features = [
  "Open source",
  "Desktop + Mobile versions",
  "Customisable themes and wallpapers",
  "Can add any kind of application as a react component",
  "Simple architecture",
  // If you add text longer than the previous increase the canvasWidth
];

const canvasHeight = features.length * 100;
const canvasWidth = 670;

const FeaturesCanvas = () => {
  const [bunnyRotation, setBunnyRotation] = useState(0);
  const [dragonOffset, setDragonOffset] = useState(0);

  const dragonURL = "images/green-dragon.png";

  useEffect(() => {
    setInterval(() => {
      setBunnyRotation((bunnyRotation) => bunnyRotation + 0.05);
    }, 50);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setDragonOffset((dragonOffset) =>
        dragonOffset > 1200 ? 0 : dragonOffset + 3
      );
    }, 1);
  }, []);

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
          style={new TextStyle({
            fontFamily: "robotic",
            fontSize: 20,
            align: "center",
            fill: "0xffffff",
            letterSpacing: 2,
          })}
        />
      </Container>
    );
  });
  return (
    <>
      <Stage
        width={canvasWidth}
        height={canvasHeight}
        options={{
          backgroundAlpha: 0,
          resizeTo: window,
          eventMode: "none",
          eventFeatures: {
            click: false,
            globalMove: false,
            move: false,
            wheel: false,
          },
        }}
      >
        <Sprite
          anchor={0.5}
          image={"images/dragonfly.png"}
          rotation={4.5}
          x={canvasWidth - 50}
          y={40 + dragonOffset}
        />

        {featureTextComponents}
      </Stage>
      <div
        className="h-full absolute left-0 top-0"
        style={{ width: canvasWidth }}
      >
      </div>
    </>
  );
};

export default FeaturesCanvas;
