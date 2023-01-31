import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

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