import React, { Component } from 'react';

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      msg: 'Default msg'
    }
  },


  render: function(){
    var name = this.props.name;
    var msg = this.props.msg;
    return(
      <div>
      <h1>  Hello {name}, from Greeter component</h1>
      <h3>your msg : {msg}</h3>
      </div>
    );
  }
});



export default Greeter;
