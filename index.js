// Configuration
let serverPort = 2225; // If you want, you can change the port for the http server. Default = 2225

console.log("Initialising express webserver...")
const express = require("express")
const fs = require('fs');
const http = require('http');

let app = express();

app.get("/", (req, res) => {
    var website = fs.readFileSync(__dirname + "/webaudioplayer.html").toString();
    console.log("Sent index.html to a client");
    res.status(200).send(website);
});

var httpServer = http.createServer(app);
httpServer.listen(serverPort, () => console.log("WebAudioPlayer is running on port" + serverPort));
