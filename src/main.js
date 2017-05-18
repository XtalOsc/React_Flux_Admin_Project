"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./action/InitializeActions');

InitializeActions.initApp();

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});//end Router.run function
