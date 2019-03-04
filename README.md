# liri-node-app

# Hello, and welcome to my app!

This app is called the LIRI Bot. It is designed to take in your requests for upcoming concerts, song searches, and movie searches and give you pertinent information for each topic. LIRI is a Language Interpretation and Recognition Interface. It is  command line node app that takes in parameters and gives you back data.

## How it works

LIRI can be searched in four different ways. Each different command will give you a different output.

### Spotify

You can use the search term `spotify-this-song` and you wil be able to search spotify for the song of your choosing. 

### Bands in town

You can use the search term `concert-this`to search Bands in Town for upcoming concerts for the bands you choose.

### OMDB    

You can use the search term `movie-this` to search the OMDB database for movie information on movies that you choose.

### Search from a text file

This repository has a text file named 'random.txt'. You can enter any of the three other methods in this text document and, once you use the term `do-what-it-says`, the program will automatically search from this file.

## Syntac

The program requires node.js and is incredibly easy to use. Just type in 'Node liri ___[your command]___  ___your search term____, and LIRI will take care of the rest!