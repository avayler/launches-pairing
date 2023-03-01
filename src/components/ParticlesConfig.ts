export const ParticlesConfig = {
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
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "#fff",
        },
        particles: {
          color: {
            value: "#89ff06",
          },
        },
      },
    },

    {
      name: "dark",
      default: {
        value: false,
        mode: "dark",
      },
      options: {
        background: {
          color: "#fff",
        },
        particles: {
          color: {
            value: "#89ff06",
          },
        },
      },
    },
  ],
  detectRetina: true,
};
