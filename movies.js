const axios = require('axios')


var movies

var type = process.argv[2];
var movie = process.argv.slice(3).join('+')

if (type === 'movie-this') {
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

        fs.appendFile("log.txt", 'Name: ' + response.data.Title + ', ' + 'Release year: ' + response.data.Year + ', ' +  'Plot: ' + response.data.Plot + ', ' + 'Actors: ' + response.data.Actors + 'Rotten Tomatoes rating: ' + response.data.Ratings[1].Value + divider, function(err) {
            if (err) throw err;
           
          });
    })
}

module.exports = movies;