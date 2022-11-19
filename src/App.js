import React from 'react';
import './App.css';
// import * as ReactBootstrap from 'react-bootstrap';
import {MealRandomiser} from './mealRandomiser';

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
            <div className="meal-randomiser col">
              <MealRandomiser/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
