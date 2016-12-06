import React, { Component } from 'react';

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'Default message'
    }
  },

  render: function(){
    var name    = this.props.name;
    var message = this.props.message;
    return(
      <div>
      <h1>  Hello {name}, from Greeter component</h1>
      <h3>{message}</h3>

    <form>
      <input type='text' ref='name'/>
    </form>
      </div>
    );
  }
});



export default Greeter;
