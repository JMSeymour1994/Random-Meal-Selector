import React from 'react';
import './App.css';
// import * as ReactBootstrap from 'react-bootstrap';
import {NumOfMeals, Meals} from './helperFunctions';
// import mealRandomiser from './mealRandomiser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Meal Selector</h1>
      </header>
      <div className='row'>
        <div className='d-flex col justify-content-end align-items-center'>
          <p>Select the number of meals</p>
        </div>
        <div className="num-of-meals-dropdown col">
          <NumOfMeals/>
        </div>
      </div>

    </div>
  );
}

export default App;
