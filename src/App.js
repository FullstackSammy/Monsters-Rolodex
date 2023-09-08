import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Samuel', lastName: 'Nasstrom'}
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello Reacter</h1>
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}</p>
          <button onClick={() => {
            this.setState({name: {firstName: 'Gabriel', lastName: 'Michaelson'}});
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
