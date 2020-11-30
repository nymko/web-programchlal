import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/states/States'
import Example from './components/example/Example'
import { HashRouter, Route, Link } from "react-router-dom";

import Header from './components/header/Header'

class App extends React.Component {
    render() {
      return (
        <div>
        
        <HashRouter>
			<div>
        
                
                <ul>
                  <li>
                    <Route path="/components/states" component={State}  />
                    <Link to="/components/states">States</Link>
                  </li>

<ul>
  <li>

                <Link to="/components/example">Example</Link>
                
                <Route path="/components/example" component={Example}  />
</li>
</ul>
                

        
          
       </div>
		</HashRouter>
   
    </div>
      );
    }
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('reactapp5')
  );


