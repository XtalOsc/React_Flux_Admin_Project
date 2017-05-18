"use strict";

var Dispatcher = require('../dispatcher/AppDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/ActionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    })//end Dispatcher.dispatch
  }//end createAuthor function
};//end AuthorActions

module.exports = AuthorActions;
