import React, {Component} from 'react';
import './App.css';
import Greeter from './features/greeter';


var App = React.createClass({
  render:function(){
    return(
      <div>
        <Greeter />
      </div>
    );
  }
});


export default App;
