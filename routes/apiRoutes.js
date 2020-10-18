// pulling in dependency 

var fs = require('fs');

// creating a variable that will call on the myNotes function 
var newNotes = myNotes();

// myNotes function will create a variable that reads the db.json file 
// another variable is created to parse the data from the db.json file 
// for loop will provide a unique ID each time a note is added to the database 

function myNotes() {
    
    var dbData = fs.readFileSync('./Develop/db/db.json', 'utf8');

    var dbDataParsed = JSON.parse(dbData);

    for (let i = 0; i < dbDataParsed.length; i++) {
        dbDataParsed[i].id = '' + i;
    }

    return dbDataParsed;
}

// GET/POST/DELETE CALLS 
module.exports = ((app) => {

// this GET request will execute the function above and will render (in the form of an object), the notes added to the db.json file with unique IDs 
    app.get('/api/notes', ((req, res) => {
        newNotes = myNotes();
        res.json(newNotes);
    }))   

// this POST request will allow the user to add a new note. The new note will be pushed to the existing list of notes in the db.json file. 

    app.post('/api/notes', ((req, res) => {
        newNotes.push(req.body);
        fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newNotes), 'utf8');
        res.json(true);
    }))

// this DELETE request will allow the user to delete a note. 

  app.delete('/api/notes/:id',  ((req, res) => {

    var ID = req.params.id;
    
    var noteDel = newNotes.filter(noteDel => {

        return noteDel.id === ID; })[0];

    var index = newNotes.indexOf(noteDel);

    newNotes.splice(index, 1);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newNotes), 'utf8');

    res.json('This Note Has Been Deleted');
    }));
})