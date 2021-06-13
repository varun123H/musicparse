const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
app.get('/', (req, res) =>{
fs.readFile('music.json',
    function(err, data) {       
        
           
        var jsonData = data;
        var jsonParsed = JSON.parse(jsonData);

        console.log(jsonParsed.musics[0].name + " is " + jsonParsed.musics[0].genre + "song");
        console.log(jsonParsed.musics[1].name + " is produced by " + jsonParsed.musics[1].special);
    
        res.send(jsonParsed.musics[0].name + " is " + jsonParsed.musics[0].genre + "song")
    });
   
});

app.listen(port , () => console.log('Server started on port',8080));