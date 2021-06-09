const express = require('express')
const app = express()
const port = 4000

const users = ['Sogir Ali', 'Mogir Ali', 'Togir Ali', 'Bogir Ali', 'Nodir Ali'];

app.get('/', (req, res) => {
  const fruit = {
    product:'Tormuz',
    price: 340
  }
  res.send(fruit)
})
app.get('/fruit/bangi', (req, res) => {
  res.send({fruit:'bangi', quantity:34, price:50})
})
app.get('/users/:id'), (req, res) => {
//  console.log(req.params.id)
 const id = req.params.id;
//  console.log(req.query.sort);
 const name= users[id];
  res.send(name);
}

app.listen (port, () => console.log("listing port 4000"));