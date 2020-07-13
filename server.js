const { v4: uuidv4 } = require('uuid');
var express = require("express")
var path = require("path");
const fs = require("fs")
var app = express();
var PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
console.log(uuidv4());



 app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"));
 })

 app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
 })



app.get("/api/notes", function(req,res){
    try{
    res.sendFile(path.join(__dirname, "db/db.json"));
    }
    catch(error)
    {
        res.send(error);
    }
})

app.post("/api/notes",function(req,res){
try{

    fs.readFile('db/db.json', function (err, data) {
        var notes = JSON.parse(data)
        const noteRequest = req.body;
        const newNoteId = notes.length + 1;
        console.log(noteRequest);
        const newNote = {
                     id:newNoteId,
                    title: noteRequest.title,
                    text: noteRequest.text
                };


                notes.push(newNote)
                   res.json(notes)
                   fs.writeFile('db/db.json', JSON.stringify(notes), function (err) {
                    if (err) return console.log(err);
                    console.log('inserted');
                  });

        
 });
        
        

}
catch(error)
{
   console.log(error);
}

})

app.delete("/api/notes/:id", function(req, res) {
    const deleteId = req.params.id;
    fs.readFile("db/db.json", "utf8", function(error, response) {
        if (error) {
            console.log(error);
        }
        let notes = JSON.parse(response);
        if (deleteId <= notes.length) {
            res.json(notes.splice(deleteId-1,1));

            // Reassign the ids of all notes
            for (let i=0; i<notes.length; i++) {
                notes[i].id = i+1;
            }
            fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), function(err) {
                if (err) throw err;
            });
        } else {
            res.json(false);
        }
        

    });
    
});
app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`)
})

