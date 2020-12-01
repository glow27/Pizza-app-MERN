import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';

import User from '../model/user.js';



export default function (passport) {
  passport.use(
    new LocalStrategy.Strategy(
      {
        usernameField: 'email',
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({
            email: username,
          });
          if (user && (await bcrypt.compare(password, user.password))) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: 'Invalid email or password.',
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      return done(err, user);
    });
  });
}
