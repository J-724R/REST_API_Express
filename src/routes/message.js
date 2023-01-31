import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Messages
router.get('/', (req, res) =>{
  res.send(Object.values(req.context.models.messages))
})

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.contex.admin.id,
  };

  req.context.models.messages[id] = message;
  
  return res.send(message);
});


//Unique message
router.get('/:messageId', (req, res) =>{
  res.send(req.context.models.messages[req.params.messageId].text)
})
  
router.put('/:messageId', (req, res) => {
  const indentifier = req.params.messageId

  messages[indentifier].text = req.body.text;
})

router.delete('/:messageId', (req, res) =>{
  // Destructuring
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  const feedback= req.context.models.messages[req.params.messageId].text;

  req.context.models.messages = otherMessages;
  res.send(`Deleted messages: ${feedback}`);
})

export default router;