import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurf } from '../Actions';
function App(props) {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      {props.smurfs.map(smurf => <div> <h1>{smurf.name}</h1> <p>{smurf.age}</p> <p>{smurf.height}</p></div>)}

      <button onClick={props.getSmurf}>See The Smurfs</button>



    </div>
  )
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurf })(App)
