"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });//end Dispatcher.dispatch
  },//end createAuthor function

  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });//end Dispatcher.dispatch
  }//end updateAuthor function
};//end AuthorActions

module.exports = AuthorActions;
