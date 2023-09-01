import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#2e5445", // this sets a background color for the canvas
      },
      retina_detect: true,
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
       
      },
    //   detect_on: "canvas",
      interactivity: {
        // detect_on: "canvas",
       
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 4    , // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
        },
        polygon: {
            nb_sides: 5,
        },
        line_linked: {
            enable: true,
            distance: 250,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
        },
        // links: {
        //   enable: true, // enabling this will make particles linked together
        //   distance: 50, // maximum distance for linking the particles
        // },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 7 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.3}, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 8 }, // let's randomize the particles size a bit
        },
        autoPlay: true,
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;      