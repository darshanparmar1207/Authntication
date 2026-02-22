const cookieParser = require('cookie-parser')
const express = require('express')
const userModel = require('./models/user')
const bcrypt = require('bcrypt')

const port = 3000
const app = express()
const path = require('path')
const { log } = require('console')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


app.get('/', (req, res) =>{
    res.render('index')
})

// Create User
app.post('/create', async (req, res) => {
    let { username, email, password, age } = req.body;

    // Bcrypt pssword
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
        let createduser = await userModel.create({
            username,
            email,
            password: hash,
            age
        })
    res.send(createduser)
        })
    });
})


app.listen(3000)
console.log(`Example app listening on port ${port}!`)