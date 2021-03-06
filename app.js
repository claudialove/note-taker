//things to require things to decalre
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = 3000;

// these are required for express and linking data between files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//These are my routes
//index
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//this is the route to the main note-taker page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//this is the route for reading the JSON for existing notes
app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        data = JSON.parse(data);   
        res.json(data);
    });
});

//this is the route for writing and saving new notes usins add functionality
app.post("/api/notes", function(req, res){
    const newNote = {title: req.body.title, text: req.body.text};
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        data = JSON.parse(data);
        data.push(newNote);
        data = JSON.stringify(data);
        fs.writeFile("./db/db.json", data, function(err){
            if(err) throw err;
        });
    });
    res.json(newNote);
});

app.delete("/api/notes/:id", function (req, res) {
 const id = req.params._id;
 const notes = req.body;
 Notes.removeNotes(id, (err, notes) => {
  if (err) {
   throw err;
  }
  res.json(notes);
 });
 res.sendFile("notes");
});


//this starts the server effectively and send console log to let us know its running
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});