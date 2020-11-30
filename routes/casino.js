import express from 'express';
import User from '../model/user.js';
import { userLogged } from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/', userLogged, async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.user.email });
  
  user.orders.push(req.body)
  await user.save();

  return res.end();
  
});

router.get('/history', userLogged, async (req, res) => {
  console.log(req.user);
  const user = await User.findOne({ email: req.user.email });

  return res.json(user.orders);
  
});

export default router;

