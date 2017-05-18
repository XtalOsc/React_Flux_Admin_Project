"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../action/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],//end mixins

  statics: {
    willTransitionFrom: function(transition, component) {
      if(component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }//end if
    }//end willTransitionFrom function
  },//end statics

  getInitialState: function() {
    return {
      author: {id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false
    };//end return
  },//end getInitialState function

  //set state before rendering occurs
  componentWillMount: function() {
    var authorId = this.props.params.id; //from the path '/author:id'
    if(authorId) {
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }//end if
  },//end componentWillMount function

  setAuthorState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value; //value typed in by user
    this.state.author[field] = value; //update state for the field that was passed with the value that was passed
    return this.setState({author: this.state.author});//change author to this.state.author
  },//end setAuthorState function

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};//clear previous errors
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 charcters.';
      formIsValid = false;
    }//end if
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 charcters.';
      formIsValid = false;
    }//end if
    this.setState({errors: this.state.errors});
    return formIsValid;
  },//end authorFormIsValid function

  saveAuthor: function(event) {
    event.preventDefault();
    if(!this.authorFormIsValid()) {
      return;
    }//end if
    AuthorActions.createAuthor(this.state.author);
    this.setState({dirty: false});
    toastr.success('Author saved.');
    this.transitionTo('authors');
  },//end saveAuthor function

  render: function() {
    return (
        <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors} />
    );//end return
  }//end render function
});//end React.createClass

module.exports = ManageAuthorPage;
