const path = require('path')
const Clarifai = require('clarifai');
const { createDir, downloadImageFromURL, createDBImageRef } = require('./files')
const { albumsPath } = require('../config')
require('dotenv').config()

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
 });

const handleApiCall = (req, res, db) => {
  try {
    uploadFromUrlHandler(req, res);
    app.models.predict( Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('api error'))
  } catch(err) {
    res.status(400).json('api error')
  }
  };



// handle new photo upload from user when image is referenced by url, download the image and add DB reference
const uploadFromUrlHandler = async (req, res, db) => {
  try {
    let id = req.body.id
    let url = req.body.input
    let userDictatory = path.join(albumsPath, id.toString());
    const imageLocation = await downloadImageFromURL(url, userDictatory);
    if (imageLocation) {
      const dbRow = await createDBImageRef(id, 'test', imageLocation);
      return dbRow;
    } else {
      return false;
    }
  } catch (err) {
    return err
  }
 };


const handleImage =(req, res, db) => {
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
