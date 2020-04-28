const fs = require('fs');
const path = require('path');
const axios = require('axios');
const db = require('../db');
const { albumsPath } = require('../config')

// create directory if not exists
const createDir = (dirName) => {
    const dir = path.join(albumsPath, dirName.toString())
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
};


// receive URL and directory where to save, download image to that directory
const downloadImageFromURL = async (url, saveDirectory) => {
    const filename = url.replace(/[#_*<>()"?]/g,'').split('/').pop();
    const savePath = path.join(saveDirectory, filename)
    res = await axios({url, responseType: 'stream'})
    .then(response => new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(savePath))
          .on('finish', () => resolve(savePath))
          .on('error', e => reject(e));
    })).catch(err => console.log(err))

    return res;
};

// receive User ID, photo classification and photo location - save data as new row in DB
const createDBImageRef = (userID, classification = null, location = null) => {
    db.transaction(trx => {
        trx.insert({
          user_id: userID,
          classification: classification,
          location: location
        })
        .into('photos')
        .returning('photos')
        .then(trx.commit)
        .catch(trx.rollback)
      })
};

// return photo path by User ID and full filename (including extension)
const getLocalPhotoPath = (userID, filename) => {
    return path.join(albumsPath, userID.toString(), filename)
};


module.exports = {
    createDir: createDir,
    downloadImageFromURL: downloadImageFromURL,
    createDBImageRef: createDBImageRef,
    getLocalPhotoPath: getLocalPhotoPath
}