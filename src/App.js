import React from 'react';
import './App.css';
// import * as ReactBootstrap from 'react-bootstrap';
import {NumOfMeals, Meals} from './helperFunctions';
// import mealRandomiser from './mealRandomiser';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <section id='header' className='p-5'>
        <div className='container'>
          <header className="App-header">
            <h1>Random Meal Selector</h1>
          </header>
        </div>
      </section>

      {/* Parameter selection */}

      <section id='parameters' className='px-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='d-flex col-7 justify-content-end align-items-center pb-4'>
              <p>Select the number of meals:</p>
            </div>
            <div className="num-of-meals-dropdown col-5">
              <NumOfMeals/>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex col-7 justify-content-end pb-4'>
              <p>Output:</p>
            </div>
            <div className="meals-output col-5">
              <Meals/>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
