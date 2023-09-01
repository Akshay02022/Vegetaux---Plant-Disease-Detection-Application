import React from "react";
import "./home.css";
import Particles1 from "./ParticlesComponent";
const Leftpanel = () => {
  return (
    <div className="left-panel">
      <Particles1 id="tsparticles1" />
      <div className="maintitle">
        <img className="vxlogo" src="vxlogo.png" width="50" height="60" />
        <h3>Végétaux</h3>
      </div>

      <center>
        <h1 className="title">Plant Disease Detection</h1>
        <p className="description">
          &#34;Discover the disease in your plant, with our simple and
          user-friendly interface.
          <br />
          Start by uploading an image of the affected leaf and let us take care
          of the rest.
          <br />
          Join us in our mission to protect and preserve the beauty of our green
          world.&#34;
        </p>
      </center>
    </div>
  );
};

export default Leftpanel;
