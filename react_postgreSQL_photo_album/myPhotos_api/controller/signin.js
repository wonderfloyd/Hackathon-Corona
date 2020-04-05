const handleSignin = (req, res, bcrypt, db) => {
  const { email, password } = req.body; 
  if( !email || !password ) {
    return res.status(400).json('error signin form')
  }
  db.select('email', 'hash').from('login')
  .where('email', '=', email)
  .then(data => {
    // console.log(data)
    const isValid = bcrypt.compareSync(password, data[0].hash);
    // console.log(isValid)
    if(isValid) {
     db.select('*').from('users')
        .where('email', '=', email)
        .then(user => res.json(user[0]))
        .catch(err => res.status(400).json('unable to get user'))
    } else{
       throw(err);
    }
  })
  .catch(err => res.status(400).json('email or password does not exist'))
}

module.exports = {
  handleSignin: handleSignin
}