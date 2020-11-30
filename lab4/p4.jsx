import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/states/States'
import Example from './components/example/Example'

import Header from './components/header/Header'

  function Swi(props) {
    const boole = props.boole;
    if (boole) {
      return <State/>;
    }
    return <Example />;
  }


function ExampleB(props) {
    return (
      <button onClick={props.onClick}>
        Go to State
      </button>
    );
  }
  
  function Stateb(props) {
    return (
      <button onClick={props.onClick}>
        Go to Example
      </button>
    );
  }

  class Switche extends React.Component {
    constructor(props) {
      super(props);
      this.handleStateClick = this.handleStateClick.bind(this);
      this.handleExampleClick = this.handleExampleClick.bind(this);
      this.state = {boole: false};
    }
  
    handleStateClick() {
      this.setState({boole: true});
    }
  
    handleExampleClick() {
      this.setState({boole: false});
    }
  
    render() {
      const boole = this.state.boole;
      let button;
  
      if (boole) {
        button = <Stateb onClick={this.handleExampleClick} />;
      } else {
        button = <ExampleB onClick={this.handleStateClick} />;
      }
  
      return (
        <div>
          <Header/>
          {button}
          <Swi boole={boole} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Switche />,
    document.getElementById('reactapp4')
  );


