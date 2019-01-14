import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CountDown from "./components/CountDown/countDown";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CountDown />
        <Footer />
      </div>
    );
  }
}

export default App;
