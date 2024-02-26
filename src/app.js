import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/mohnish-kumar-7b0037172/"
        target="_blank"
      >
        Mohnish Kumar
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        ResTRO<span>App</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
