const express = require('express')
const app = express()
const redditData = require('./data.json')
const e = require('express')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) =>{
    const num = Math.floor(Math.random() *10) + 1;
    res.render('home', {rand: num})
})

app.get('/r/:subreddit', (req, res)=>{
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    console.log(data)
    if(data){
        res.render('subreddit', { ...data })
    } else{
        res.render('notfound', {subreddit}) 
    }
    
})

app.get('/models', (req, res)=>{
    const models = ['Civic', 'Accord', 'Prelude', 'Integra', 'Fit']
    res.render('models', { models })
})

app.listen(3000, ()=>{
    console.log('LISTENING ON PORT 3000!')
})