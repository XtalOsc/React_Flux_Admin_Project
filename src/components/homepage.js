"use strict";
var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className = "jumbotron">
      <h1>Administration</h1>
      <p>React, React Router, and Flux for ultra-responsive web apps.</p>
      </div>
    );//end return
  }//end render function
});//end react.createClass

module.exports = Home;
