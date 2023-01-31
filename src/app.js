import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import models from './models';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    admin: models.users[1]
  };
  next();
});


// <<<<<< Fake Database
// let users = {
//   1: {
//     id: '1',
//     username: 'Robin Wieruch',
//   },
//   2: {
//     id: '2',
//     username: 'Dave Davids',
//   },
//   3: {
//     id: '3',
//     username: 'Ryuk'
//   }
// };

// let messages = {
//   1: {
//     id: '1',
//     text: 'Hello World',
//     userId: '1',
//   },
//   2: {
//     id: '2',
//     text: 'By World',
//     userId: '2',
//   },
//   3: {
//     id: '3',
//     text: 'Quiero pollito !!!',
//     userId: '3',
//   }
// };
//  <<<<<<



app.get('/', (req, res) => {
  res.send('Hello World! \n Received a GET HTTP method');
});


// User
app.get('/users', (req, res) => {
  res.send(Object.values(req.context.models.users))
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
  res.send(req.context.models.users[req.params.userId])
})

app.put('/user/:userId', (req, res) => {
  res.send(req.context.models.users[req.params.userId])
})

app.delete('/user/:userId', (req, res) => {
  res.send(`DELETE HTTP method received on user/${req.context.models.users[req.params.userId]} resource`)
})


// Messages
app.get('/messages', (req, res) =>{
  res.send(Object.values(req.context.models.messages))
})

app.get('/messages/:messageId', (req, res) =>{
  res.send(req.context.models.messages[req.params.messageId].text)
})

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.contex.admin.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

app.put('/messages/:messageId', (req, res) => {
  const indentifier = req.params.messageId

  messages[indentifier].text = req.body.text;
})

app.delete('/messages/:messageId', (req, res) =>{
  // Destructuring
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  const feedback= req.context.models.messages[req.params.messageId].text;

  req.context.models.messages = otherMessages;
  res.send(`Deleted messages: ${feedback}`);
})

//Sessions
app.get('/session', (req, res) => {
  res.send(users[req.contex.models.users[req.contex.admin.id]])
})


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);