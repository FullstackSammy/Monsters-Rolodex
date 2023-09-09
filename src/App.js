import { Component } from "react";

import "./App.css";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123esadf",
        },
        {
          name: "Frank",
          id: "142ifsa",
        },
        {
          name: "Jackie",
          id: "156ghed4",
        },
        {
          name: "Sam",
          id: "123edfrt",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
