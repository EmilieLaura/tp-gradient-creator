import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from './Components/Title';
import Color from './Components/Color';
import Gradient from './Components/Gradient';
import Rotation from './Components/Rotation';

function App() {
  return (
    <div className="App">
      <Title title={"CSS Gradient Creator"}/>

      <div className="container">
        <div className="row">
          <Color/>
          <Color/>
          <Rotation/>
        </div>

        <div>
          <Gradient/>
        </div>

      </div>

    </div>
  );
}

export default App;
