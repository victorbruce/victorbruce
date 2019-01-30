import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <nav>
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </main>
    );
  }
}

export default App;
