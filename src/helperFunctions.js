import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

class NumOfMeals extends React.Component {
  constructor() {
  super();

  this.state = {
      dropDownValue: "#"
    };
  this.numOfMeals = this.state.dropDownValue;
  }

  changeValue(text) {
    this.setState({dropDownValue: text})
  }

  render() {
    return (
      <div className="App">
        <div>
          <ReactBootstrap.DropdownButton id="dropdown-item-button" title={this.state.dropDownValue} className="format"> 
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>One meal</div>
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Two meals</div>
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Three meals</div>
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Four meals</div>
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Five meals</div>
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Six meals</div>
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>Seven meals</div>
            </ReactBootstrap.Dropdown.Item>
          </ReactBootstrap.DropdownButton>
        </div>
      </div>
    );
  }
}

class Meals extends React.Component {
  constructor() {
  super();

    this.meals = {
      mealArr: ["Pizza",
      "Stir fry",
      "Roast",
      "Take away",
      "Chilli",
      "Mushroom pasta",
      "Lasagne",
      "Fish and chips",
      "Halloumi burgers",
      "Fishcakes",
      "Mozzarella Burgers"]
    };
    this.numOfMeals = new NumOfMeals();
  }


  render() {



    return (
      <div className="App">
        <div>
          <ol>
            {this.meals.mealArr.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
            })}
          </ol>
          <p>{this.numOfMeals.numOfMeals}</p>
        </div>
      </div>
    );
  }
}

export {NumOfMeals, Meals};