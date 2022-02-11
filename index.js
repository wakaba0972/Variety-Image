const express = require('express');
const PORT = process.env.PORT || 3000;
var map = new Map()

var app = express()
    .use(express.json({limit : '50000kb'}))
    .use(express.static('./imgs'))
    .get('/r', (req, res)=> {
        let rand = Math.floor(Math.random() * 10)
        if(rand == 0){
            if(Math.floor(Math.random() * 10) < 3) res.redirect('SSR_1.jpg')
            else res.redirect('SSR_0.jpg')
        }
        else if(rand < 4) res.redirect('R_0.jpg')
        else  res.redirect('N_0.jpg')
    })
    .get('/ac', (req, res)=> {
        let data, seed = req.originalUrl.slice(2)
        if(data = map.get(seed)){
            let level = data['level']
            let num = data['num']
            res.redirect(level + '_' + num + '.jpg')
        }
        else{
            let rand = Math.floor(Math.random() * 10)
            if(rand == 0){
                if(Math.floor(Math.random() * 10) < 3){ 
                    map.set(seed, {'level': 'SSR', 'num': 1})
                    res.redirect('SSR_1.jpg')
                }
                else{ 
                    map.set(seed, {'level': 'SSR', 'num': 0})
                    res.redirect('SSR_0.jpg')
                }
            }
            else if(rand < 4){
                map.set(seed, {'level': 'R', 'num': 0})
                res.redirect('R_0.jpg')
            }
            else{ 
                map.set(seed, {'level': 'N', 'num': 0})
                res.redirect('N_0.jpg')
            }
        }
        console.log(map)
    })
    .listen(PORT, ()=> console.log('Listening on ' + PORT))
