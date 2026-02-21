const cookieParser = require('cookie-parser')
const express = require('express')

const port = 3000
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())




app.get('/', (req, res) =>
    res.send('Welcome !'))


app.listen(3000)
console.log(`Example app listening on port ${port}!`)