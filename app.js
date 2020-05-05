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
 // homepage
 // /notes where notes can be seen 
 // /notes/add

    app.get("/", function (req, res){
        //this path goes to index.html
      res.sendFile(path.join(__dirname, "public/index.html"))
    });

    app.get("/notes", function (req, res){
    //this path goes to notes.html where user can view notes
    res.sendFile(path.join(__dirname, "public/notes.html"))
    //getNotes(); //how do i call this since it lives in another file
    });


    app.get("/note/add", function (req, res){
    //adding files uses text box input, not sure what i need to write here +/- how much this conflicts with function in index.js
    
    });

    app.get("/note/delete/:id", function (req, res){
    //there are no objects on screen for activating delete...
  
    });

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// =============================================================
    
  


