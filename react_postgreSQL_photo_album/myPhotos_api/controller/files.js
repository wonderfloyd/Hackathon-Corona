const fs = require('fs');
const path = require('path');

// Set the Albums directory path (the dir the contains all user dedicated dir's)
const albumsPath = path.join(process.cwd(), 'albums')

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

module.exports = {createDir: createDir}