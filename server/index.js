const express=require('express')
const serveStatic =require('serve-static')
// const path=require('path')

const app=express()

// app.use('/',serveStatic(path.join(__dirname,'/dist')))

if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port=process.env.PORT || 8080

app.listen(port)

console.log(`listening on port: ${port}`)



