import React, { Component } from "react";
import "./App.css";
import PersonsListContainer from "./PersonsListContainer";
import PersonFormContainer from "./PersonFormContainer";
import PersonStore from "./PersonStore";

class App extends Component {
  constructor(props) {
    super(props);
    this.personStore = new PersonStore();
  }

  render() {
    return (
      <div className="row">
        <div className="col s6" />
        <div className="col s6">
          <header>
            <h1 className="header">List of People</h1>
          </header>
          <main>
            <PersonsListContainer personStore={this.personStore} />
            <PersonFormContainer personStore={this.personStore} />
          </main>
          <footer>RoboTjerk Entertainment, Tjercus 2017</footer>
        </div>
      </div>
    );
  }
}

export default App;
