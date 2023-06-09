
import { React, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman">
          <p>This is child props</p>
        </Greet>  {/*  Functional component */}
        <Greet name="Sanvi" heroName="Wonder girl">
          <button>Hello worlde</button>
          <p>This is para</p>
        </Greet>   {/*  Functional component */}
        <Greet name="Bandi" heroName="Humble hubby" />  {/*  Functional component */}
        <Greet name="Priyanka" heroName="wify" /> {/* Functional component */}

        {/* <Welcome /> */} {/* Class compoent */}
        {/* <Hello /> */} {/* Functional component without jsx */}
      </div>
    );
  }
}

export default App;
