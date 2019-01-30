import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Blog from "./components/Blog/Blog";
// import Projects from "./components/Projects/Projects";
// import Home from "./components/Home/Home";
import "./assets/style.css";

class App extends Component {
  render() {
    return (
      <main>
          <Navbar />
          {/* <div>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div> */}
      </main>
    );
  }
}

export default App;
