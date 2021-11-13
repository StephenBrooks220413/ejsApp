const express = require('express');
const path=require("path");
const app = express();
const axios = require('axios');

//request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname,'assets')));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a data source.";
    res.render('pages/about', {
        mascots: mascots,
        tagline: tagline
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');