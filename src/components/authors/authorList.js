"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },//end propTypes

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );//end return in createAuthorRow function
    };//end createAuthorRow function

    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );//end return
  }//end render function
});//end React.createClass

module.exports = AuthorList;
