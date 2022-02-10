//const sharp = require('sharp');
const express = require('express');
//const Text2SVG = require('text-to-svg');
const PORT = process.env.PORT || 3000;

var app = express()
    .use(express.json({limit : '500000kb'}))
    .get('/', (req, res)=> {
        res.send('go to /randomImgs')
    })
    .get('/randomImgs', (req, res)=> {
        let num = Math.floor(Math.random() * 10)
        if(num == 0){
            if(Math.floor(Math.random() * 10) < 3) res.sendFile(__dirname + '/imgs/SSR_1.PNG')
            else res.sendFile(__dirname + '/imgs/SSR_0.PNG')
        }
        else if(num < 4){
            res.sendFile(__dirname + '/imgs/R_0.PNG')
        }
        else{ 
            res.sendFile(__dirname + '/imgs/N_0.PNG')
        }
    })
    .listen(PORT, ()=> console.log('Listening on ' + PORT))
