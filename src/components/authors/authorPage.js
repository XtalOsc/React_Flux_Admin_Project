"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../action/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./AuthorList');

var AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };//end return in getInitialState function
  },//end getInitialState function

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },//end componentWillMount function

  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },//end componentWillUnmount function

  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },//end onChange function

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );//end return
  }//end render function
});//end React.createClass

module.exports = AuthorPage;
