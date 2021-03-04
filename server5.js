const express = require('express');
const serveStatic =require('serve-static')
const path=require('path')
const request = require('request');

const app = express();



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/branch', (req, res) => {
    request(
        { url: 'http://developer.amanabigbazar.com/api/branch' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }

            res.json(JSON.parse(body));
            console.log("Anon")
            console.log(res.json(JSON.parse(body)))
        }
    )
});

app.get('/jokes/random', (req, res) => {
    request(
        { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }

            res.json(JSON.parse(body));
            console.log("Bondhu Jahir")
            console.log(res.json(JSON.parse(body)))
        }
    )
});

app.use('/',serveStatic(path.join(__dirname,'/dist')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));