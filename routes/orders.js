import express from 'express';
import User from '../model/user.js';
import { userLogged } from '../middleware/checkAuth.js';

const router = express.Router();

/**get user's order history */
router.get('/history', userLogged, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (user) return res.json(user.orders);
});

/**add order to history */
router.post('/add', userLogged, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  user.orders.push(req.body);
  await user.save();
  return res.end();
});

export default router;
