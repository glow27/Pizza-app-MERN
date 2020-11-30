export const userLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('IN');
    return next();
  }
  res.status(401).end();
}

export const userLoggedOut = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('inin');
    res.status(401).end();
  }
  console.log('OUT');
  next();
}
