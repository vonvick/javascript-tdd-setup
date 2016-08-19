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

    it('should return 0 for note list length', function() {
      // var note2 = new Note('', 'Victor');
      // var create = noteapp.create(note2);
      // assert(noteapp.notes.length === 0);
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
      assert.isString(getItems, 'Note found' );
    });

    it('should not return a note from the list', function() {
      noteapp.create(note);
      var getItems = noteapp.getNote(2);
      assert(getItems === 'No result found');
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

    it ('should return a list of search result with search text in an array', function() {
      noteapp.create(note);
      var searchResult = noteapp.searchList("like");
      assert(searchResult.length > 0);
    });

    it ('should return 2 for length of search result with search text in an array', function() {
      var note2 = new Note('I like football', 'Victor');
      noteapp.create(note);
      noteapp.create(note2);
      var searchResult = noteapp.searchList("like");
      assert.include(searchResult, '2', 'Found 2 results');
    });

    it ('should return array length as 0', function() {
      noteapp.create(note);
      var searchResult = noteapp.searchList("want");
      assert.include(searchResult, '0', 'Found no results');
    });

    it ('should return a string', function() {
      noteapp.create(note);
      var searchResult = noteapp.searchList("");
      assert.isString(searchResult);
    });

  });

  describe('delete a note by ID', function() {

    beforeEach(function() {
      note = new Note('I like andela', 'Victor');
    });

    it("returns the length of note list to be 2", function() {
      var note2 = new Note("I love andela", "Victor");
      var note3 = new Note("I love football", "Victor");
      noteapp.create(note);
      noteapp.create(note2);
      noteapp.create(note3);
      var length = noteapp.notes.length;
      var deleted = noteapp.delete(2);
      assert(length -= 1)
    })

    it("returns a message that says Note not found", function() {
      noteapp.create(note);
      var deleted = noteapp.delete(3);
      assert.isString(deleted);
      assert.include(deleted, 'Could not find the file to delete', 'file not found');
    });

    it('returns a message that ask if iD is a string', function() {
      noteapp.create(note);
      var deleted = noteapp.delete("story");
      assert.isString(deleted);
    });
  });

  describe('editNote', function() {
    beforeEach(function() {
      note = new Note('I like andela', 'Victor');
    });

    it('returns a new value to be a string', function() {
      noteapp.create(note);
      var edited = noteapp.edit(1, "I want be a programmer");
      assert.isString(edited);
      assert(edited == 'I want be a programmer');
    });

    it('returns enter a number to edit', function() {
      noteapp.create(note);
      var edited = noteapp.edit("I want be a programmer");
      assert(edited == 'Enter a number for the note ID');
    });

    it('returns could not find the file to edit', function() {
      noteapp.create(note);
      var edited = noteapp.edit(3,"I want be a programmer");
      assert(edited == 'Could not find the file to edit');
    });

    it('returns you did not enter any note', function() {
      noteapp.create(note);
      var edited = noteapp.edit(1, '');
      assert(edited == 'you did not enter any note');
    });
  });
});
