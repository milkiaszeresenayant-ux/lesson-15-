import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#posts">Posts</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
