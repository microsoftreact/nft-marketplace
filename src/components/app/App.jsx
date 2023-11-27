import React from "react";
import "./App.css";
import Header from "../header/Header";
import Collection from "../collections/Collection";
import User from "../user/User";
import Magic from "../magic/Magic";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <div className="app min-h-screen bg-[#2B2B2B]">
      <Header />
      <Collection />
      <User />
      <Magic />
      <Footer />
    </div>
  );
};

export default App;
