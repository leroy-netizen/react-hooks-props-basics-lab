import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{bio}</p>S */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <Links bio={bio} github={links.github} linkedin={links.linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
