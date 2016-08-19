'use strict';
// NotesApplication class

var noted = require("./notes.js");

module.exports = function(author) {

  this.notes = [];
  noted.call(this, author);

  //function that creates a note
  // this.create = function(note) {
  //   // var string = note.trim();
  //   if(note !== undefined) {
  //     return this.notes.push(noted.call(note));
  //   } else {
  //     return "You did not enter any text";
  //   }
  // }
  this.create = function(note) {
  	noted.call(this, note, author);
    if(note !== undefined && note !== "") {
      this.notes.push(note);
      return "note created";
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
        listResults += this.notes[i].note + '\n';
        listResults += 'By Author: ' + this.author + '\n' + '\n';
      }
      return listResults;
    }
  }

  //function that gets a note based on the note_id given
  this.getNote = function(note_id) {
    var getResult = "";
    if (typeof note_id === 'number') {
      for (var j = 0; j < this.notes.length; j++) {
        if(j === note_id - 1) {
          getResult += this.notes[j].note;
          return getResult;
        }
      } return "No result found";
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
      var removed = this.notes.[deleted];
      return 'you have deleted ' + '\"'+ deleted + '\"' + ' from the list';
    }
  }

  //function that returns a note that matches a string
  this.searchList = function(search_text) {
    console.log('Showing results for search: ' + search_text + '\n');
    var searchResult = [];
    var searchCount = 0
    var author = this.name;

    if (search_text === "" || search_text === " ") {
      return "You did not enter a search text";
    } else {
      for (var k = 0; k < this.notes.length; k++) {
        if (this.notes[k].note.indexOf(search_text) !== -1) {
          searchResult.push(this.notes[k]);
          searchCount++;
        }
      }
      //return searchResult;
      if (searchResult.length > 0) {
	      var listResult = "";
	      for (var m = 0; m < searchResult.length; m++) {
	      	listResult += "Note ID " + [m + 1]  + '\n';
	      	listResult += searchResult[m].note + '\n';
	      	listResult += 'By Author: ' + searchResult[m].author + '\n' + '\n';
	      }
      	return "Your search returned " + searchResult.length +" results" + "\n" + "\n" + listResult;
      } else {
      	return "No results found " + searchResult.length;
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
