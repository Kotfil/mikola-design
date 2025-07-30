import { FC } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export const Background: FC = () => {
  const particlesInit = async (engine: any) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // не на весь экран
        preset: "links",
        background: { color: "#000000" },
        particles: { move: { speed: 0.3 } },
      }}
      style={{
        position: "absolute", // обязательно!
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // под контентом
        pointerEvents: "none", // не мешает кликам
      }}
    />
  );
};
