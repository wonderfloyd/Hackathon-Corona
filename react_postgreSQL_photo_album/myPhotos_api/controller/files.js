const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Set the Albums directory path (the dir the contains all user dedicated dir's)
const albumsPath = path.join(process.cwd(), 'albums')

// create directory if not exists
const createDir = (dirName) => {
    const dir = path.join(albumsPath, dirName.toString())
    console.log(dir)
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    } else
    {
        console.log("Directory already exist");
    }
};


const downloadImageFromURL = (url, saveDirectory) => {
    const filename = url.split('/').pop();
    const savePath = path.join(saveDirectory, filename)
    axios({url, responseType: 'stream'})
    .then(response => new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(savePath))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
    })).catch(err => console.log(err))
};


/*
downloadImageFromURL(
    url = "https://miro.medium.com/max/5400/1*VcHVCyRSAOF3V6Ldi0iXOQ.jpeg",
    savePath= path.join(process.cwd()))

downloadImageFromURL(
    url = "https://www.yourdictionary.com/images/definitions/lg/10531.people.jpg",
    savePath= path.join(process.cwd()))
*/

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

module.exports = {
    createDir: createDir,
    downloadImageFromURL: downloadImageFromURL,
    createDBImageRef: createDBImageRef,
    albumsPath: albumsPath
}