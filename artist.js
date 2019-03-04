const axios = require('axios');
const moment = require('moment')
const fs = require('fs')


var artist


var type = process.argv[2];
var search = process.argv.slice(3).join('+')

var url = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"

var divider = "\n------------------------------------------------------------\n\n";

if (type === 'concert-this') {

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

        fs.appendFile("log.txt", 'Artist(s): ' + response.data[0].lineup.slice().join(', ') + ', ' + 'Venue name: ' + response.data[0].venue.name + ', ' +  'Venue city: ' + response.data[0].venue.city + ', ' + 'Venue state: ' + response.data[0].venue.region + 'Date: ' + newDate + divider, function(err) {
            if (err) throw err;
           
          });
        }
   })
}

module.exports = artist;