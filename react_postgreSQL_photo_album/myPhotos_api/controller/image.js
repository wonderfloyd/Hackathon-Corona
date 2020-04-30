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
    app.models.predict( Clarifai.GENERAL_MODEL, req.body.input)
    .then(data => {
      let imageClassificationList = data.outputs[0].data.concepts;
      let imageClassification = imageClassificationList[0].name || null;
      uploadFromUrlHandler(req, imageClassification);
      console.log('classifiction: ',imageClassification);
      res.json(data);
    })
    .catch(err => res.status(400).json('api error'))
  } catch(err) {
    res.status(400).json('api error')
  }
  };



// handle new photo upload from user when image is referenced by url, download the image and add DB reference
const uploadFromUrlHandler = async (req, imageClassification ) => {
  try {
    let id = req.body.id
    let url = req.body.input
    let userDictatory = path.join(albumsPath, id.toString());
    const imageLocation = await downloadImageFromURL(url, userDictatory);
    if (imageLocation) {
      const dbRow = await createDBImageRef(id, imageClassification || null, imageLocation);
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
