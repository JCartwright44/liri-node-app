const axios = require("axios");
const Spotify = require('./spotify');
const artist = require('./artist')
const movies = require('./movies')
const fs = require('fs');

var type = process.argv[2];

if (type === 'do-what-it-says'){
    fs.readFile('./random.txt', 'utf-8', function read(error, data) {
        if (error) {
            throw error;
        }
        data = data
        data1 = data.substr(0, data.indexOf(','))
        data2 = data.substr(data.indexOf(','))
        data2 = data2.slice(2, data.indexOf('"' + 2))

        if (data1 === 'concert-this') {
            var type = data1;
            var search = data2

            var url = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
            axios.get(url).then(function(response){
                var event = response.data;
        
                if (event[0] === undefined) {
                    console.log('There are no upcoming concerts listed for this band.')
                } else {
        
                var date = response.data[0].datetime.slice(0, 10)
                var newDate = moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY')
        
                console.log('Artist(s): ' + response.data[0].lineup.slice().join(', '))
                console.log('Venue name: ' + response.data[0].venue.name)
                console.log('Venue city: ' + response.data[0].venue.city)
                console.log('Venue state: ' + response.data[0].venue.region)
                console.log('Date: ' + newDate)
                }
           })
        }
        if (data1 === 'spotify-this-song') {
            var type = data1;
            var song = data2
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
              });
        }
        if (data1 === 'movie-this') {
            var type = data1;
            var movie = data2

            url = 'http://www.omdbapi.com/?t=' + movie + '&apikey=trilogy'

            axios.get(url).then(function(response){
                console.log('Name: ' + response.data.Title)
                console.log('Release year: ' + response.data.Year)
                console.log('IMDB rating:  ' + response.data.Ratings[0].Value)
                console.log('Rotten Tomatoes rating: ' + response.data.Ratings[1].Value)
                console.log('Country produced: ' + response.data.Country)
                console.log('Language: ' + response.data.Language)
                console.log('Plot: ' + response.data.Plot)
                console.log('Actors: ' + response.data.Actors)
            })
        }

    })

} 
// else {
    // console.log('Please type a proper command.')
// }
