const express = require('express');
const request = require('request');

const app = express();



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/', (req, res) => {
    request(
        { url: 'http://developer.amanabigbazar.com/api/' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }

            res.json(JSON.parse(body));
        }
    )
});

app.use('/',serveStatic(path.join(__dirname,'/dist')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));