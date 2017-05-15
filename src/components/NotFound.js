"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry! The page you are looking for does not exist.</p>
        <p><Link to="app">Back to Home</Link></p>
      </div>
    );//end return
  }//end render function
});//end 404

module.exports = NotFound;
