// vue.config.js

const path=require('path');

module.exports = {
    outputDir: path.resolve(__dirname,'server/public'),
    devServer:{
        proxy: 'http://developer.amanabigbazar.com/'
    }
}