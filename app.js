import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

// <<<<<< Fake Database
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
  3: {
    id: '3',
    username: 'Ryuk'
  }
}

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
  3: {
    id: '3',
    text: 'Quiero pollito !!!',
    userId: '3',
  }
}
//  <<<<<<



app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! \n Received a GET HTTP method');
});

app.post('/', (req, res) =>{
  res.send('Received a POST HTTP method')
})

app.put('/', (req, res)=>{
  res.send('Received a PUT HTTP method')
})

app.delete('/', (req, res)=>{
  res.send('Received a DELETE HTTP method')
})

// User
app.get('/users', (req, res) => {
  res.send('Hello user!!! \n Received a GET HTTP method');
});

app.post('/users', (req, res) => {
  res.send('Hello user!!! \n Received a POST HTTP method')
})

app.put('/users', (req, res)=> {
  res.send('Hello user!!! \n Received a PUT HTTP method')
})

app.delete('/users', (req, res)=> {
  res.send('Hello user!!! \n Received a DELETE HTTP method')
})

// User unique indentifiear
app.put('/user/:userId', (req, res) => {
  res.send(`PUT HTTP method received on user/${req.params.userId} resource`)
})

app.delete('/user/:userId', (req, res) => {
  res.send(`DELETE HTTP method received on user/${req.params.userId} resource`)
})

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);