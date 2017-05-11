"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./AuthorList');

var Authors = React.createClass({
  getInitialState: function(){
    return {
      authors: []
    };//end return in getInitialState function
  },//end getInitialState function

  componentDidMount: function() {
    if(this.isMounted()) {
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }//end if
  },//end componentWillMount function

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors} />
      </div>
    );//end return
  }//end render function
});//end React.createClass

module.exports = Authors;
