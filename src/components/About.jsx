import React from "react";

function About({ image = "https://via.placeholder.com/215" }) {
  return (
    <div>
      <aside>
        <img src={image} alt="blog logo" />
      </aside>
      <p>About this blog</p>
    </div>
  );
}

export default About;
