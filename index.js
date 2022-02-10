//const sharp = require('sharp');
const express = require('express');
//const Text2SVG = require('text-to-svg');
const PORT = process.env.PORT || 3000;

var app = express()
    .use(express.json({limit : '50000kb'}))
    .use(express.static('./imgs'))
    .get('/', (req, res)=> {
        res.send('go to /randomImgs')
    })
    .get('/ri', (req, res)=> {
        let num = Math.floor(Math.random() * 10)
        if(num == 0){
            if(Math.floor(Math.random() * 10) < 3) res.redirect('SSR_1.png')
            else res.redirect('SSR_0.PNG')
        }
        else if(num < 4){
            res.redirect('R_0.png')
        }
        else{ 
            res.redirect('N_0.PNG')
        }
    })
    .listen(PORT, ()=> console.log('Listening on ' + PORT))
