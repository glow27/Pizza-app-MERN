import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../model/user.js';
import { userLoggedOut, userLogged } from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/login', userLoggedOut, async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).end();
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post('/registration', userLoggedOut, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(401).end();
  }
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const { email, name, lastName, phone, address } = req.body;
  const newUser = new User({
    password: hashedPass,
    email,
    name,
    lastName,
    phone,
    address,
  });
  await newUser.save();
  return res.end();
});

router.get('/user', userLogged, (req, res) => {
  const { name, lastName, email, phone, address, orders } = req.user;
  const user = { name, lastName, email, phone, address, orders };
  return res.json(user);
});

router.get('/logout', (req, res) => {
  req.logout();
  return res.end();
});

export default router;
