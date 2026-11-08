import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="main" id="home">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
