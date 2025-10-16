import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
            Help meeeee
        </h1>
      </div>
    );
  }
}

console.log('testtestttest')
const appDiv = document.getElementById('app');
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    appDiv
);
