/*eslint-disable strict*/  //Disable check because we can't run in strict mode. Global variables are needed

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <RouteHandler/>
        </div>
      </div>
    );//end return
  }//end render function
});//end React.createClass

module.exports = App;
