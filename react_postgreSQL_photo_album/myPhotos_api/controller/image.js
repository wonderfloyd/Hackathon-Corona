const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'bcab8c5a84474f509041c4c03e14c9c8'
 });
 
const handleApiCall = (req, res) => {
  console.log(req)
  app.models.predict( Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json('api error'))
}


const handleImage = (req, res, db) => {
  const {id} = req.body;
  db('users')
    .where('id' ,'=' , id)
    .increment('entries' , 1)
    .returning('entries')
    .then(ent => res.json(ent[0]))
    .catch(err => res.status(400).json("can't get entries"))

}
module.exports = {
  handleImage: handleImage,
  handleApiCall: handleApiCall
}
