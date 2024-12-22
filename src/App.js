import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Circle from "./components/Circle";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      {/* <Circle /> */}
      <Footer />
    </div>
  );
};

export default App;
