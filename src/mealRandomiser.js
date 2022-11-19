import React, { useReducer } from "react";
import * as ReactBootstrap from 'react-bootstrap';

const mealsArr = ["Pizza", "Stir fry",
"Roast", "Take away",
"Chilli", "Mushroom pasta",
"Lasagne", "Fish and chips",
"Halloumi burgers", "Fishcakes",
"Mozzarella Burgers"
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, numOfMeals: state.numOfMeals + 1}
    case "decrement":
      return {...state, numOfMeals: state.numOfMeals - 1}
    case "meals":
      return {...state, meals: action.payload};
    default:
      throw new Error();
  }
}

export function MealRandomiser() {

  // Declare the meal state variables
  const [state, dispatch] = useReducer(reducer, 
    {numOfMeals: 7, meals: mealsArr.slice(0, 7)});

  function shuffle() {
    for (let i = mealsArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [mealsArr[i], mealsArr[j]] = [mealsArr[j], mealsArr[i]];
    }
    return mealsArr.slice(0, state.numOfMeals);
  }

  return (
    <div className="App">
      <div className="container">
        <section id="buttons">
            <ReactBootstrap.InputGroup.Text>
                <div className="row">
                  <div className="col-7">
                    Number of meals: {state.numOfMeals}
                  </div>
                  <div className="col-5">
                    <ReactBootstrap.Button className="me-1" onClick={() => dispatch({ type: "decrement"})}>-</ReactBootstrap.Button>
                    <ReactBootstrap.Button className="me-1" onClick={() => dispatch({ type: "increment"})}>+</ReactBootstrap.Button>
                    <ReactBootstrap.Button className="me-5" onClick={() => dispatch({type: "meals", payload: shuffle()})}>Enter</ReactBootstrap.Button>
                  </div>
                </div>
              </ReactBootstrap.InputGroup.Text>
        </section>
        <section id="list" className="py-4">
            <ReactBootstrap.ListGroup as="ol" numbered>
            {state.meals.map((item) => {
              return <ReactBootstrap.ListGroup.Item as="li">{item}</ReactBootstrap.ListGroup.Item>
            })}
            </ReactBootstrap.ListGroup>
        </section>
      </div>
    </div>
  )
}

