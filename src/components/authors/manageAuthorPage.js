"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: {id: '', firstName: '', lastName: '' }
    };//end return
  },//end getInitialState function

  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value; //value typed in by user
    this.state.author[field] = value; //update state for the field that was passed with the value that was passed
    return this.setState({author: this.state.author});//change author to this.state.author
  },//end setAuthorState function

  render: function() {
    return (
        <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState} />
    );//end return
  }//end render function
});//end React.createClass

module.exports = ManageAuthorPage;
