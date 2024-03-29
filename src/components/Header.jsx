import React from "react";
import headerImage from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build! hehe
      </p>
    </header>
  );
};
