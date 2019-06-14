const express = require('express');
const app = express();
const Port = 4000;
const path = require('path')


app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', {})
})
app.get('/todo', (req, res) => {
    res.render('todo', {  })
})
app.get('/aboutus', (req, res) => {
    res.render('aboutus', {  })
})
app.listen(Port, () => {
    console.log(`running on port like a swag - ${Port}`)
})
