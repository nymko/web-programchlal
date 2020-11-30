import React from 'react';
import './States.css';


/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalues: '',
    };
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());

    this.handleChangeBound = event => this.handleChange(event);
  
  };

  handleChange(event) {
    this.setState({inputvalues: event.target.value });
  }

  outOfBandJSX(option) {
    var listItems = [] = window.cs142models.statesModel();
    listItems.sort();
    var X=0;
    var listOfStates = [];
    if(this.state.inputvalues === ""){
      for(var i=0; i<50; i++){
         listOfStates[i] = <li key={i}>{listItems[i]} </li> 
    }}else{ 
    for(var i=0; i<50; i++){
      if(listItems[i].toLowerCase().includes(this.state.inputvalues.toLowerCase())){
          listOfStates[i] = <li key={i}>{listItems[i]} </li> 
          X++;
        }
      }
    }

  if(X==0)
    listOfStates[1]= <li key={1}> {"Null"} </li>
    var retVal =
      <div className="retval">
        <ul>
          {listOfStates}
        </ul>
      </div>;
  
    return retVal;
  }

  render() {
    return (
      <div>
      <div className="cs142-example-output-states">
          <label htmlFor="inId">States:
          </label>
          <input id="InpId" type="text" value={this.state.inputvalues} onChange={this.handleChangeBound} />

        </div>
         <div className="cs142-example">{this.outOfBandJSX(true)}</div>
      </div>
    );
  }
}

export default States;
