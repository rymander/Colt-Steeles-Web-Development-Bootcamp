const express = require('express')
const app = express()

// app.use((req, res)=>{
    
    
// })
app.get('r/:subreddt', (req, res)=>{
    res.send('This is a subreddit!')
})

app.get('/cats', (req, res)=>{
    console.log('Cat request!')
    res.send({cat: 'Meow!!'})
})

app.get('/dogs', (req, res)=>{
    console.log('Dog request!')
    res.send({dog: 'ARFF!!'})
})




app.get('/search', (req, res) =>{
    console.log(req.query)
    const { q } = req.query
    
    if(!q){
        res.send('Nothing was searched.')
    }   else{
        console.log(q)
        res.send(`You searched for: ${q}`)
    }
    
})
app.get('*', (req, res) =>{
    res.send('Could not find that!')
})

//  /cats
//  /dogs
// /home
app.listen(3000, ()=>{
    console.log('Listening on port: 3000')
})