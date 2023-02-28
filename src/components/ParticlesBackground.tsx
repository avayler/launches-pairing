import { useCallback, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  //   const root = window.document.documentElement;
  //   const isDark = root.classList.contains("dark");
  //   console.log(isDark);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: localStorage.theme === "dark" ? "#1e293b" : "#f1f5f9",
            // value: "#1e293b",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 250,
              line_linked: {
                opacity: 0.2,
              },
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 160,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: localStorage.theme === "dark" ? "#f1f5f9" : "#1e293b",
          },
          links: {
            color: localStorage.theme === "dark" ? "#f1f5f9" : "#1e293b",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "right",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 180,
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesBackground;
