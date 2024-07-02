const express = require('express')
const app = express();
const morgan = require('morgan')
const AppError = require('./AppError')


app.use(express.urlencoded({extended: true}))
app.use(morgan('common'))

app.use((req, res, next)=>{
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use('/dogs',(req, res, next)=>{
console.log('I love dogs!!')
next()
})

const verifyPass =  (req, res, next)=>{

    const {password} = req.query
    if(password === 'spongebob'){
        next()
    }
    
    throw new AppError('Password was not correct', 401)
}
// app.use((req, res, next) => {
//     console.log(`Here is our first middleware!`)
//     next()
// })
// app.use((req, res, next) => {
//     console.log(`Here is our second middleware!`)
//     next()
// })

app.get('/', (req, res)=>{
    console.log(`request date: ${req.requestTime}`)
    res.send('HOME PAGE')
})
app.get('/dogs', (req, res)=>{
    console.log(`request date: ${req.requestTime}`)
    res.send('RUFF RUFF')
})
app.get('/admin', (req, res)=>{
    throw new AppError('You are NOT an Admin!!', 403)
})

app.get('/error', (req, res)=>{
    chicken.fly()
})

app.get('/krabbypatty', verifyPass, (req, res)=>{
    res.send('Thank you for keeping it a secret me boy 🦀')
})


// app.use((req, res)=>{ //everything above is checked to see for a route, if nothing is found, this runs
//     res.status(404).send('NOT FOUND')
// })
app.use((err, req, res, next)=>{ //everything above is checked to see for a route, if nothing is found, this runs
    const { status = 500, message = 'SomethiNG WENT WRONG!!' } = err;
    res.status(status).send(message)
})


app.listen(3000, ()=>{
    console.log('App is running on localhost:3000')
})