import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Header from './components/header/Header'




ReactDOM.render(
  <Header />,
  document.getElementById('reactheader'), 
);


ReactDOM.render(
  <States />,
  document.getElementById('reactapp'),

 
);
