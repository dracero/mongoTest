import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Toggle} from './button.js';
import {LoginControl} from './login.js';
import {ToggleDB} from './testDB.js';
import {ToggleIns} from './insertDB.js';
import {ExpressDB} from './testExDB.js'

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

ReactDOM.render(
  <ToggleIns />,
  document.getElementById('app2')
);

ReactDOM.render(
  <ExpressDB />,
  document.getElementById('app3')
);