import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mdiddleware
app.use((req, res, next) => {
  req.og = users[1];
  next();
});


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
};

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
};
//  <<<<<<



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
  res.send(Object.values(users))
  // res.send('Hello user!!! \n Received a GET HTTP method');
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
app.get('/user/:userId', (req, res) => {
  res.send(users[req.params.userId])
  // res.send(`GET HTTP method received on user/${req.params.userId} resource`)
})

app.put('/user/:userId', (req, res) => {
  res.send(users[req.params.userId])
  // res.send(`PUT HTTP method received on user/${req.params.userId} resource`)
})

app.delete('/user/:userId', (req, res) => {
  res.send(`DELETE HTTP method received on user/${req.params.userId} resource`)
})

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

// Messages
app.get('/messages', (req, res) =>{
  res.send(Object.values(messages))
})

app.get('/messages/:messageId', (req, res) =>{
  res.send(messages[req.params.messageId].text)
})

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.og.id,
  };

  messages[id] = message;

  return res.send(message);
});

app.delete('/messages/:messageId', (req, res) =>{
  // Destructuring
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  const feedback= messages[req.params.messageId].text;

  messages = otherMessages;
  res.send(`Deleted messages: ${feedback}`);
})

//Sessions

app.get('/session', (req, res) => {
  res.send(users[req.me.id])
})