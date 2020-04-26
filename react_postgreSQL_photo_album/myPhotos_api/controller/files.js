const fs = require('fs');
const path = require('path');

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

const saveImageRef = (userID, classification = null, location = null) => {
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

module.exports = {createDir: createDir}