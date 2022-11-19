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
    case "numOfMeals":
      return {...state, numOfMeals: action.payload};
    case "meals":
      return {...state, meals: action.payload};
    default:
      throw new Error();
  }
}

export function NumOfMeals() {

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
      <div>
        <ReactBootstrap.DropdownButton id="dropdown-item-button" title={state.numOfMeals} className="format"> 
          <ReactBootstrap.Dropdown.Item as="button">
            <div onClick={(e) => {
              dispatch({type: "numOfMeals", payload: e.target.textContent});
              dispatch({type: "meals", payload: shuffle()})
            }}
            >1</div>
          </ReactBootstrap.Dropdown.Item>
          <ReactBootstrap.Dropdown.Item as="button">
          <div onClick={(e) => {
            dispatch({type: "numOfMeals", payload: e.target.textContent});
            dispatch({type: "meals", payload: shuffle()})
          }}
          >2</div>
          </ReactBootstrap.Dropdown.Item>
          <ReactBootstrap.Dropdown.Item as="button">
          <div onClick={(e) => {
            dispatch({type: "numOfMeals", payload: e.target.textContent});
            dispatch({type: "meals", payload: shuffle()})
          }}
          >3</div>
          </ReactBootstrap.Dropdown.Item>
          <ReactBootstrap.Dropdown.Item as="button">
          <div onClick={(e) => {
            dispatch({type: "numOfMeals", payload: e.target.textContent});
            dispatch({type: "meals", payload: shuffle()})
          }}
          >4</div>
          </ReactBootstrap.Dropdown.Item>
          <ReactBootstrap.Dropdown.Item as="button">
          <div onClick={(e) => {
            dispatch({type: "numOfMeals", payload: e.target.textContent});
            dispatch({type: "meals", payload: shuffle()})
          }}
          >5</div>
          </ReactBootstrap.Dropdown.Item>
          <ReactBootstrap.Dropdown.Item as="button">
          <div onClick={(e) => {
            dispatch({type: "numOfMeals", payload: e.target.textContent});
            dispatch({type: "meals", payload: shuffle()})
          }}
          >6</div>
          </ReactBootstrap.Dropdown.Item>
          <ReactBootstrap.Dropdown.Item as="button">
          <div onClick={(e) => {
            dispatch({type: "numOfMeals", payload: e.target.textContent});
            dispatch({type: "meals", payload: shuffle()})
          }}
          >7</div>
          </ReactBootstrap.Dropdown.Item>
        </ReactBootstrap.DropdownButton>
      </div>
        <div>
          <ReactBootstrap.ListGroup as="ol" numbered>
          {state.meals.map((item) => {
            return <ReactBootstrap.ListGroup.Item as="li">{item}</ReactBootstrap.ListGroup.Item>
          })}
          </ReactBootstrap.ListGroup>
        </div>
    </div>
  )
}

