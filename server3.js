const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

const serveStatic =require('serve-static')
const path=require('path')

// Create Express Server
const app = express();

app.use('/',serveStatic(path.join(__dirname,'/dist')))

// Configuration
// const PORT=process.env.PORT || 8080
const PORT=process.env.PORT || 80
// const PORT = 8080;
// const HOST = "facebook.com";
// const HOST = "developer.amanabigbazar.com";
const HOST = "localhost";
const API_SERVICE_URL = "http://developer.amanabigbazar.com";

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Authorization
// app.use('', (req, res, next) => {
//     if (req.headers.authorization) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// });


// Proxy endpoints
app.use('/api', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '/api',
    },
}));


// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
    // console.log(`Starting Proxy at ${HOST}`);
});
