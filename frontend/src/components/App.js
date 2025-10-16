import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
            <Route path='/join' element={<RoomJoinPage />}/>
            <Route path='/create' element={<CreateRoomPage />}/>
            <Route path='/' element={<p> This is the Home Page </p>}/>
        </Routes>
      </Router>
    );
  }
}

console.log('New New Test...')
const appDiv = document.getElementById('app');
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    appDiv
);
