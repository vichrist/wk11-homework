// pull in path dependency 
var path = require("path"); 

// get request to return the notes.html file 
module.exports = ((app) => {
  app.get("/notes", ((req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log("Successfully returned notes.html")
  }));

 // get request that will return the index.html file 
  app.get("*", ((req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
    console.log("Successfully returned index.html")
  }))
});