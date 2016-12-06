import React, { Component } from 'react';

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'Default message'
    }
  },
  onButtonClick:function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    alert(name);
  },


  render: function(){
    var name    = this.props.name;
    var message = this.props.message;
    return(
      <div>
      <h1>  Hello {name}, from Greeter component</h1>
      <h3>{message}</h3>

    <form onSubmit={this.onButtonClick}>
      <input type='text' ref='name'/>
      <button>Set name</button>
    </form>
      </div>
    );
  }
});



export default Greeter;
