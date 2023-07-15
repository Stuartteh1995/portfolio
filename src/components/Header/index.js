import React from "react";
import "./style.css";



const Header = (props) => {
  return (
    <header id="header">

      <h1>Stuart Teh</h1>
      {props.children}
    </header>
  );
};

export default Header;
