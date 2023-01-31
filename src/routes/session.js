import { Router } from "express";

const router = Router()

//Sessions
router.get('/', (req, res) => {
  res.send(users[req.contex.models.users[req.contex.admin.id]])
})

export default router;