const path = require('path')
const Clarifai = require('clarifai');
const { createDir, downloadImageFromURL, createDBImageRef, albumsPath } = require('./files')
require('dotenv').config()

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
 });

const handleApiCall = (req, res) => {
  console.log(req)
  uploadFromUrlHandler(req, res);
  app.models.predict( Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json('api error'))
}

const uploadFromUrlHandler = (req, res) => {
  console.log("temp")
  let url = req.body.input
  console.log(url)
  let userDictatory = path.join(albumsPath, req.body.id.toString());
  console.log(userDictatory)
  const upload = downloadImageFromURL(url, userDictatory);
 };


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
