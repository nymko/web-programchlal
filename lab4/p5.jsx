import React from 'react';
import ReactDOM from 'react-dom';
import State from './components/states/States'
import Example from './components/example/Example'
import { HashRouter, Route, Link } from "react-router-dom";
import './haha.css';

import Header from './components/header/Header'

class App extends React.Component {
    render() {
      return (
        <div>
        <Header></Header>
        <HashRouter>
                  <div><ul>
                      <div className="main"> 
                      <Link to="/components/states">States</Link>
                      <Link to="/components/example" className="k">Example</Link>
                      </div>
                <Route path="/components/states" component={State}  />       
                <Route path="/components/example" component={Example}  />
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


