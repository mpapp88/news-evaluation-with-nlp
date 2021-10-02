const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

//Cors for cross origin allowance
app.use(cors());

//Configuring the middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static('dist'));

console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
});

/*app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
}) */

//Setting up API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);

//POST route
app.post('/addData', async (req, res) => {
    const userRequest = req.body.url;
    console.log(`Request from user: ${userRequest}`);
    const requestUrl = await fetch(`${baseURL}?key=${apiKey}&url=${userRequest}&lang=en`, {
        method: 'POST'
    });
    try {
        const data = await requestUrl.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error", error)
    }
});