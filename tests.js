'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {

  var noteapp;

  beforeEach(function() {
    noteapp = new NotesApplication("Victor");
  });


  it("assigns author based on the parameter supplied in the constructor", function() {
    noteapp;
    assert.isDefined(noteapp.author);
  });

});

describe("NoteApplication works properly", function() {

  var note;
  var noteapp;

  beforeEach(function() {
    noteapp = new NotesApplication("Victor");
    note = new Note("How are you", "Victor");
  });

  it("return an empty list of notes", function() {
    assert(noteapp.notes.length === 0)
  });

  it("return an empty list of notes", function() {
    var lists = noteapp.listNotes();
    assert.isString(lists, "No note in the list");
    assert(lists === "No note in the list");
  });

  it("increments the note list as notes are added", function() {
    noteapp.create(note);
    assert(noteapp.notes.length === 1, "notes is equal to 1");
  });

  it("gets the note from the ID supplied", function(){
    var note2 = new Note("I love andela", "Victor");
    noteapp.create(note2);
    var getNote = noteapp.getNote(1);
    assert.isDefined(getNote);
    assert(getNote === "I love andela");
  })

  it("returns a text that says that the note can't be found", function() {
    var note2 = new Note("I love andela", "Victor");
    noteapp.create(note2);
    var getNote = noteapp.getNote(3);
    assert.isString(getNote);
  })

  it("deletes the note from the note list", function() {
    var note2 = new Note("I love andela", "Victor");
    var note3 = new Note("I love andela", "Victor");
    noteapp.create(note);
    noteapp.create(note2);
    noteapp.create(note3);
    var length = noteapp.notes.length;
    noteapp.delete(2);
    assert(length -= 1)
  })

  it("returns a message that says Note not found", function() {
    var note2 = noteapp.create(note);
    var note3 = noteapp.create("I like to learn");
    var deleted = noteapp.delete(3);
    assert.isString(deleted)
    assert(deleted === "Could not find the file to delete");
  });

  it("returns the search result for the search text ", function() {
    var search =noteapp.search("are")
    assert.isNotNull(search)
  });

  it("returns a string that says Could not find text: ", function() {
    var search =noteapp.search("talk");
    assert(search === "Could not find your search text")
  });

  it("returns a string that says: ", function() {
    var search =noteapp.search("");
    assert(search === "You did not ente a search text")
  });

  it("returns a new value for the edited text: ", function() {
    var note2 = noteapp.create(note);
    var note3 = noteapp.create("I like to learn");
    var note4 = noteapp.create("This is the bootcamp");
    noteapp.create(note2);
    var edit =noteapp.edit(2, "This is andela");
    assert.isDefined(edit);
    assert(edit === "This is andela");
  });

  it("returns a new value for the edited text: ", function() {
    var note2 = noteapp.create(note);
    var note3 = noteapp.create("I like to learn");
    var note4 = noteapp.create("This is the bootcamp");
    noteapp.create(note2);
    noteapp.create(note3);
    noteapp.create(note4);
    var edit =noteapp.edit(2, "This is andela");
    assert.isString(edit);
  });


})
