"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homepage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/NotFound')} />
    <Redirect from="about-us" to="about" />//old link to new link
    <Redirect from="abuot" to="about" />//account for spelling errors
    <Redirect from="about/*" to="about" />//no longer subdirectories. Redirect to main about page
  </Route>
);//end routes

module.exports = routes;
