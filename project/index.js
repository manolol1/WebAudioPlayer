// Configuration
const serverPort = 2225; // If you want, you can change the port for the http server. Default = 2225

// Importing stuff
console.log("Initialising express webserver...")
const express = require("express")
const fs = require('fs');
const http = require('http');

const app = express();

// route for the website
app.get("/", (req, res) => {
    const website = fs.readFileSync(__dirname + "/webaudioplayer.html").toString();
    res.status(200).send(website);
});

// Creating webserver
const httpServer = http.createServer(app);
httpServer.listen(serverPort, () => console.log("WebAudioPlayer is running on port " + serverPort));