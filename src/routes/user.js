import { Router } from "express";

const router = Router();

// User
router.get('/', (req, res) => {
  res.send(Object.values(req.context.models.users))
  // res.send('Hello user!!! \n Received a GET HTTP method');
});

router.post('/', (req, res) => {
  res.send('Hello user!!! \n Received a POST HTTP method')
})

router.put('/', (req, res)=> {
  res.send('Hello user!!! \n Received a PUT HTTP method')
})

router.delete('/', (req, res)=> {
  res.send('Hello user!!! \n Received a DELETE HTTP method')
})


// User unique indentifiear
router.get('/:userId', (req, res) => {
  res.send(req.context.models.users[req.params.userId])
})

router.put('/:userId', (req, res) => {
  res.send(req.context.models.users[req.params.userId])
})

router.delete('/:userId', (req, res) => {
  res.send(`DELETE HTTP method received on user/${req.context.models.users[req.params.userId]} resource`)
})

export default router;