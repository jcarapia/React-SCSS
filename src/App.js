import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Landing from './Landing';

require('../public/main.scss');

class App extends Component {

  render() {
    return (
      <div>
        <Landing />  
      </div>
      
    )
  }
};

ReactDOM.render(<App />, document.querySelector("#app"));

