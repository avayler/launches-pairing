
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import React, { useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";

const Background = () => {
  const [theme, setTheme] = useState("light");
  const particlesInit = useCallback(async (engine:Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const [particlesContainer, setParticlesContainer] = useState<
    Container | undefined
  >();

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
     await setParticlesContainer(container);
    },
    []
  );

  useEffect(() => {
    if (particlesContainer) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);
  return (
    <div id="particle-background">
      <div className="background">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <Particles
       
          id="tsparticles"

          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#1e293b",
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
                  quantity: 1,
                },
                repulse: {
                  distance: 160,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#f1f5f9",
              },
              links: {
                color: "#f1f5f9",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 0.5,
              },
              collisions: {
                enable: false,
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
      </div>
    </div>
  );
};

export default Background;
