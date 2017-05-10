"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
  getInitialState: function(){
    return {
      authors: []
    };//end return in getInitialState function
  },//end getInitialState function
  componentWillMount: function() {
    this.setState({ authors: AuthorApi.getAllAuthors() });
  },//end componentWillMount function

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );//end return in createAuthorRow function
    };//end createAuthorRow function

    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );//end return
  }//end render function
});//end React.createClass

module.exports = Authors;
