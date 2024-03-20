const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, resp) =>{
    const num = Math.floor(Math.random() *10) + 1;
    resp.render('home', {rand: num})
})

app.get('/r/:subreddit', (req, res)=>{
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})


app.listen(3000, ()=>{
    console.log('LISTENING ON PORT 3000!')
})