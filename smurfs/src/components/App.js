import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurf } from '../Actions';
class App extends Component {
  render(props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>{props.smurfs}</div>
        <button onClick={props.getSmurf}>See The Smurfs</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurf })(App)
