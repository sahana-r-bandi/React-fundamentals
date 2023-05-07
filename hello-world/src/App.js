
import {React, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet />  {/*  Functional component */}
        <Welcome /> {/* Class compoent */}
        <Hello /> {/* Functional component without jsx */}
      </div>
    );
  }
}

export default App;
