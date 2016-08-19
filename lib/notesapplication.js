// NotesApplication class

var noted = require("./notes.js");

module.exports = function(author) {

  this.notes = [];
  noted.call(this, author);

  //function that creates a note
  this.create = function(note) {
    // var string = note.trim();
    if(note !== undefined) {
      return this.notes.push(noted.call(note));
    } else {
      return "You did not enter any text";
    }
  }

  //function that displays the list of notes
  this.listNotes = function() {
    var listResults = "";
    if (this.notes.length < 1) {
    return 'You do not have any note here!';
    } else {
      for (var i = 0; i < this.notes.length ; i++) {
        listResults += 'Note ID: ' + (i+1) + '\n';
        listResults += this.notes[i] + '\n';
        listResults += 'By Author: ' + this.name + '\n' + '\n';
      }
      return listResults;
    }
  }

  //function that gets a note based on the note_id given
  this.getNote = function(note_id) {
    var getResult = "";
    if (typeof note_id === 'number') {
      var note = this.notes[note_id - 1];
      if (note) {
        getResult += note;
        return getResult;
      }
      else {
        getResult += 'Note not found'
        return note;
      }
    }
    return 'You entered ' + note_id + '';
  }

  //function that deletes a note from the list
  this.delete = function(note_id) {
    var deleted = "";
    if (this.notes.length < note_id - 1) {
      deleted += 'Could not find the file to delete';
      return deleted;
    } else {
      deleted += this.notes.splice([note_id - 1 ],1);
      var removed = this.notes[deleted];
      return 'you have deleted ' + '\"'+ deleted + '\"' + ' from the list';
    }
  }

  //function that returns a note that matches a string
  this.search = function(search_text) {
    console.log('Showing results for search: ' + search_text + '\n');
    var searchResult = "";
    var searchCount = 0;
    var author = this.name;
    if (search_text === "" || search_text === " ") {
      return "You did not enter a search text";
    } else {
      for (var i = 0; i < this.notes.length; i++) {
        if (this.notes[i].indexOf(search_text) !== -1) {
          searchResult += 'Note ID ' + (i + 1) + '\n';
          searchResult += this.notes[i] + '\n';
          searchResult += author + '\n' + '\n';
          searchCount += 1;
        }
      }
      if (searchCount > 0) {
      return searchResult;
      } else {
      return 'Could not find your search text';
      }
    }
  }

  //function that edits a note in the list
  this.edit = function(note_id, new_content) {
    var editResult = "";
    if (this.notes.length < note_id - 1) {
      return 'Could not find the file to edit';
    } else {
      this.notes[note_id - 1] = new_content;
      editResult += this.notes[note_id - 1];
      return editResult;
    }
  }

}
