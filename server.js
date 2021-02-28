const express=require('express')
const serveStatic =require('serve-static')
const path=require('path')
const dotenv = require("dotenv");

// load env
dotenv.config({
    path: "./config.env",
});


const app=express()

// app.use('/',serveStatic(path.join(__dirname,'/dist')))



// export const API = process.env.NODE_ENV === 'production' ? 'https://yourapp.herokuapp.com/api' : 'http://localhost:5000/api';



if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/dist/'));

    // Handle SPA
    // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port=process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

