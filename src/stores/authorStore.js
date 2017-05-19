"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var _authors = []; //private variable

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },//end addChangeListener function

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },//end removeChangeListener function

  emitChange: function() {
    this.emit('change');
  },//end emitChange function

  getAllAuthors: function() {
    return _authors;
  },//end getAllAuthors function

  getAuthorById: function(id) {
    return _.find(_authors, {id: id});
  }//end getAuthorById function
});//end AuthorStore

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
         _authors = action.initialData.authors;
         AuthorStore.emitChange();
         break;
    case ActionTypes.CREATE_AUTHOR:
         _authors.push(action.author);
         AuthorStore.emitChange();
         break;
     case ActionTypes.UPDATE_AUTHOR:
          var existingAuthor = _.find(_authors, {id: action.author.id});
          var existingAuthorIndex = _.find(_authors, existingAuthor);
          _authors.splice(existingAuthorIndex, 1, action.author);
          AuthorStore.emitChange();
          break;
    default:
         //no op
  }//end switch
});//end Dispatcher.register

module.exports = AuthorStore;
