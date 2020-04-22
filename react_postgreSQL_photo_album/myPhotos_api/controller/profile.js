const createDir = require('./files').createDir

const profileHandlerGet = (db) => (req, res ) => {
  const {id} = req.params;
  db.select('*')
    .from('users')
    .where({id})
    .then(user => {
      if(user.length) {
        createDir(user[0].id);
        res.json(user[0]);
      } else {
        res.status(400).json('not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))  
}
module.exports = {
  profileHandlerGet: profileHandlerGet
}