"use strict";

var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src="/images/logo.gif" width="25px" height="25px"/>
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );//end return
  }//end render function
});//end React.createClass

module.exports = Header;
