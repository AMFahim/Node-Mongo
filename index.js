const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Router } = require('express');
const port = 4000
app.use(cors())
app.use(bodyParser.json())

const users = ['Sogir Ali', 'Mogir Ali', 'Togir Ali', 'Bogir Ali', 'Nodir Ali'];

   //get

app.get('/', (req, res) => {
  const fruit = {
    product:'Tormuz',
    price: 340
  }
  res.send(fruit)
})

app.get('/users/:id'), (req, res) => {
//  console.log(req.params.id)
 const id = req.params.id;
//  console.log(req.query.sort);
 const name= users[id];
  res.send(name);
}

//POST
app.post('/addUser', (req, res)=> {
  // console.log('post req sent', req.body)
  //save to database
  const user = req.body;
  user.id = 15;
  res.send(user)
})




app.listen (port, () => console.log("listing port 4000"));