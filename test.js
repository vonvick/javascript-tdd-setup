'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe('NotesApplication', function() {

  var noteapp;
  var note;

  beforeEach(function() {
    noteapp = new NotesApplication("Victor");
  });

  it('should return a new instance of NotesApplication', function() {
    assert.instanceOf(noteapp, NotesApplication, 'noteapp is an instance of Notesapplication');
  });

  it('should return the name of the author', function() {
    var name = noteapp.author;
    assert.isNotNull(name, 'the name has been set');
  });

  describe('create', function() {

    beforeEach(function() {
      note = new Note('I like andela', 'Victor');
    });

    it('should return 1 for the note list length', function() {
      noteapp.create(note);
      assert(noteapp.notes.length === 1);
    });

    it('should return undefined for note list length', function() {
      var note2 = new Note('', 'Victor');
      var create = noteapp.create(note2);
      assert.isUndefined(note2.note);
    });

    it('should return undefined when no text is entered in note', function() {
      var note2 = new Note('', 'Victor');
      var create = noteapp.create();
      assert.isUndefined(create.note);
    });
  });

  describe('listNotes', function() {

    var note2;
    beforeEach(function() {
      note = new Note('I like andela', 'Victor');
      note2 = new Note('the bootcamp is interesting', 'Victor');

    });

    it('should return 0 for an empty list', function() {
      var lists = noteapp.listNotes();
      assert(noteapp.notes.length === 0);
    });

    it('should return 1 for a new note in the list', function() {
      noteapp.create(note);
      var lists = noteapp.listNotes();
      assert(noteapp.notes.length === 1);
    });

    it('should return 2 for a new note in the list', function() {
      noteapp.create(note);
      noteapp.create(note2);
      var lists = noteapp.listNotes();
      assert(noteapp.notes.length === 2);
    });
  });

  describe('Get Notes', function() {

    beforeEach(function() {
      note = new Note('I like andela', 'Victor');
    });

    it('should return a note from the list', function() {
      noteapp.create(note);
      var getItems = noteapp.getNote(1);
      assert.isTrue(getItems);
    });

    it('should not return a note from the list', function() {
      noteapp.create(note);
      var getItems = noteapp.getNote(2);
      assert.isUndefined(getItems);
    });

    it('should give an error for string input', function() {
      noteapp.create(note);
      var getItems = noteapp.getNote('aba');
      assert.include(getItems, 'aba', 'entered a string');
    });
  });

  describe('search', function() {

    beforeEach(function() {
      note = new Note('I like andela', 'Victor');
    });

    it ('should return a list of search result with search text', function() {
      noteapp.create(note);
      var searchResult = noteapp.search("like");
      assert.isNotNull(searchResult);
    });


  })
});
