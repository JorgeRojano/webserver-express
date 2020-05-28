const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// HBS Engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//helpers

 
app.get('/', (req, res) => {
  //res.send('Hello World')
    
  
  res.render('home', {
      nombre: 'Jorge'
  });
})

app.get('/about', (req, res) => {
  //res.send('Hello World')
  
  res.render('about');
})
 
app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`)
})