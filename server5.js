const express = require('express');
const serveStatic =require('serve-static')
const path=require('path')
const request = require('request');
require("@babel/core");

const app = express();

var mainLink;


const loadCategoryData=(link)=>{
    mainLink=link
}

const addNumber= (a,b)=>{
    let sum=a+b
    console.log(sum)
}

module.exports={loadCategoryData , addNumber}



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/jokes/random', (req, res) => {
    request(
        { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }

            res.json(JSON.parse(body));
            console.log("Bondhu Jahir")
            console.log(res.json(JSON.parse(body)))
        }
    )
});

app.get('/api', (req, res) => {
    request(

        { url: 'http://developer.amanabigbazar.com/'+mainLink },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }

            res.json(JSON.parse(body));
            console.log("Anon")
            console.log(res.json(JSON.parse(body)))
        }
    )
});



app.use('/',serveStatic(path.join(__dirname,'/dist')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));