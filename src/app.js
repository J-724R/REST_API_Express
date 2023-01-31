import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models from './models/index.js';
import routes from './routes/index.js';

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

// routes
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);


app.get('/', (req, res) => {
  res.send('Hello World! \n Received a GET HTTP method');
});


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);