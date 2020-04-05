
const handleRegister = (req, res, bcrypt, db) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json('error submitting form')
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  db.transaction(trx => {
    trx.insert({
      hash: hash,
      email: email
    })
    .into('login')
    .returning('email')
    .then(loginEmail => {

    return trx('users')
        .returning('*')
        .insert({
          name: name,
          email: loginEmail[0],
          joined: new Date()
          
        })
        .then(user=> res.json(user[0]))
      })
    .then(trx.commit)
    .catch(trx.rollback)
  })
  .catch(err => res.status(400).json('Something Went Wrong, can not register!!!'))
}

module.exports = {
  handleRegister: handleRegister
}