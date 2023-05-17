const express = require('express');
const request = require('request');
const app = express();
const cors = require('cors');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(cors());
app.get('/', (req, res) => {
    const data = {
        name: 'John' // Dynamic data to be passed to the EJS file
    };
    res.render('index', data);
});

app.get('/video', (req, res) => {
    const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Replace with your video URL
    req.pipe(request(videoUrl)).pipe(res);
});

app.listen(3000, () => {
    console.log('Proxy server listening on port 3000');
});
