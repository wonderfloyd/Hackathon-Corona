const path = require('path')
require('dotenv').config()
const { PORT } = process.env

// Set the Albums directory path (the dir the contains all user dedicated dir's)
const albumsPath = path.join(process.cwd(), 'albums')

module.exports = {
    PORT: PORT,
    albumsPath: albumsPath
}