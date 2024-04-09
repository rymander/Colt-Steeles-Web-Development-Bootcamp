const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid} = require('uuid');
const methodOverride = require('method-override')
uuid();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let reviews = [
   { username: 'Karen',
    business: 'McDonalds',
    review: 'Bathroom was disgusting, drunk person was sleeping on the floor in a puddle of their own waste',
    id: uuid()
    },
   { username: 'Sk8erBoi',
    business: 'TacoBell',
    review: 'C ya later Boi',
    id: uuid()
    },
   { username: 'Aris',
    business: 'Hilton Hotel',
    review: 'Gormless grifters everywhere!',
    id: uuid()
    },
   { username: 'k3soju',
    business: 'myHouse',
    review: 'Nope didn\'t wash my hands! Isssa FURST',
    id: uuid()
    },
]

app.get('/reviews', (req, res) =>{
    res.render('reviews/index', { reviews })
})
app.get('/reviews/new', (req, res) =>{
    res.render('reviews/new')
})

app.get('/reviews/:id', (req, res)=>{
    const { id } = req.params
    const comment = reviews.find(c => c.id === id)
    res.render('reviews/comments', { comment })
})

app.get('/reviews/:id/patch', (req, res) =>{
    const { id } = req.params
    const comment = reviews.find(c => c.id === id)   
    res.render('reviews/patch', { comment })
})

app.patch('/reviews/:id', (req, res)=>{
    const { id } = req.params;
    const patchedReview = req.body.review
    const foundReview = reviews.find(c => c.id === id)
    foundReview.review = patchedReview
    res.redirect('/reviews')
})

app.delete('/reviews/:id', (req, res)=>{
    const { id } = req.params;
    // const foundReview = reviews.find(c => c.id === id)
    reviews = reviews.filter(c => c.id !== id)
    res.redirect('/reviews')
})

app.post('/reviews', (req, res)=>{
    const {username, business, review} = req.body
    reviews.push({ username, business, review, id: uuid() })
    res.redirect('/reviews')
})

app.get('/tacos', (req, res) =>{
    res.render('/home/rymander/repos/Colt-Steeles-Web-Development-Bootcamp/ExpressIntro/restfulRoutes/views/reviews/getPost.ejs')
})
app.post('/tacos', (req, res) =>{
    const { meat, qty} = req.body
    res.render(`reviews/order`, {meat, qty})
})



app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})

