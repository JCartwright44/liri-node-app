var axios = require('axios');
require("dotenv").config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api')
const fs = require('fs')

var Spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
})

var divider = "\n------------------------------------------------------------\n\n";

var type = process.argv[2];
var song = process.argv.slice(3).join(' ');


if (type === 'spotify-this-song') {
Spotify.search({ 
    type: 'track', 
    query: song
}, function(err, data) {
    if (err) {
      return console.log('Error occurred. Cannot find this song in our database.');
    }
   
  console.log('Artist name: ' + data.tracks.items[0].artists[0].name);
  console.log('Song name: ' + data.tracks.items[0].name); 
  console.log('Song URL: ' + data.tracks.items[0].external_urls.spotify); 
  console.log('Album name: ' + data.tracks.items[0].album.name);  

  fs.appendFile("log.txt", 'Artist name: ' + data.tracks.items[0].artists[0].name + ', ' + 'Song name: ' + data.tracks.items[0].name + ', ' +  'Song URL: ' + data.tracks.items[0].external_urls.spotify + ', ' + 'Song URL: ' + data.tracks.items[0].external_urls.spotify + divider, function(err) {
    if (err) throw err;
   
  });
  });
}
module.exports = Spotify;