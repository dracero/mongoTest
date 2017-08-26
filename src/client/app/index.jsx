import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Toggle} from './button.js';
import {LoginControl} from './login.js';
import {ToggleDB} from './testDB.js';

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
);

ReactDOM.render(
  <ToggleDB />,
  document.getElementById('app1')
);
