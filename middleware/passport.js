// import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';

import User from '../model/user.js';

LocalStrategy.Strategy;

export default function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({
            email: username,
          });
          if (user && (await bcrypt.compare(password, user.password))) {
            done(null, user);
          } else {
            return done(null, false, {
              message: 'password does not match!',
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    )
  );

  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {

    User.findById(id, (err, user) => {
     
      done(err, user);
    });
  });
}
