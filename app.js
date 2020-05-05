const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//=================================================================
//what variables do we need
    //a variable for notes (arr)
    //write variables in ehre

    const notes = [];
// ==================================================================

//what routes do we need?
    // GET "/"   reads > returns all saved notes as JSON
    // POST "/addNote"  receive data to add to the db.json and return it
    // DELETE /deleteNote/:id  receive query parameter of ID of note to delte
    //api route to POST a new reservation request

    app.get("/", function (req, res){
        //reads notes array and displays them to note-taker
        $("#start-btn").on("click", function(event) {
            event.preventDefault();
           window.location.href="/note/add";
            });
      
            // Question: What does this code do??
            $.post("/note/add", newNote)
              .then(function(data) {
                console.log("add.html", data);
                alert("Adding character...");
              });
        });

    app.get("/note", function (req, res){
    //reads notes array and displays them to note-taker
  
    });

    app.get("/note/add", function (req, res){
    //listens for user interaction to create a new note, then instantiaties note object to the array
    
    });

    app.get("/note/delete/:id", function (req, res){
    //reads the id of the selected note then loops through the array to match the id and then rewrites the array without the deleted note
  
    });

    //create a new note
    app.post("/note/add", function(req,res){
        var newNote = req.body;
        note.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

        console.log(newNote);
        note.push(newNote);
        res.json(newNote);

    });
    $("#add-btn").on("click", function(event) {
        event.preventDefault();
        var newNote = {
            id: $("#id").val().trim(),
          name: $("#name").val().trim()
        };
  
        // Question: What does this code do??
        $.post("/note/add", newNote)
          .then(function(data) {
            console.log("add.html", data);
            alert("Adding character...");
          });
      });



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// =============================================================
    
  


