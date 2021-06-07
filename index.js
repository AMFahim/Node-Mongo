const express = require('express')
const app = express()
const port = 3000

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


app.listen (port, () => console.log("listing port 3000"));