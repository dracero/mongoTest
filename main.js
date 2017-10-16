import React from 'react';
import ReactDOM from 'react-dom';
import Soluc1 from './App.jsx';
import Soluc2 from './App1.jsx';
import Soluc3 from './App2.jsx';
import Parent from './AppParent.jsx';

ReactDOM.render(<Soluc1 />, document.getElementById('comp'));
ReactDOM.render(<Soluc2 />, document.getElementById('calc'));
ReactDOM.render(<Soluc3 />, document.getElementById('pop1'));
ReactDOM.render(<Parent />, document.getElementById('pop2'));