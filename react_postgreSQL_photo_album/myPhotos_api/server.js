const express = require('express');
const app = express();
// const fs = require('fs');
// const port = 3001;
const cors = require('cors');
const bcrypt = require('bcryptjs');
const register = require('./controller/register')
const signin = require('./controller/signin')
const profile = require('./controller/profile')
const image = require('./controller/image')
const db = require('./db')
const { PORT } = require('./config')
const { getLocalPhotoPath } = require('./controller/files')


db.select('*').from('users').then(data => console.log(data));

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.send(database.users);
// })
// we pass bcrypt & db to the function via dependence injection like so. 
// instead of importing them in function file (although that would work too).
app.post('/signin', (req, res) =>  signin.handleSignin(req, res, bcrypt, db))

/*
req e.g {
  name: '',
  email: '',
  password: '',
}
*/
// we pass bcrypt & db to the function via dependence injection like so. 
// instead of importing them in function file (although that would work too).
app.post('/register', (req, res) => register.handleRegister(req, res, bcrypt, db )) 
/* One way to use  Knex ".where" method is with an object e.g:
.where({
  id: id,
})
in ES6 syntax if the key and value are the same  so you can do it like this as well: (assume obj like example above)
.where({id})
*/
//  Another way of calling the function is like so:
app.get('/profile/:id', profile.profileHandlerGet(db));

app.put('/image', (req, res) => image.handleImage(req, res, db));
app.post('/imageurl', (req, res) => image.handleApiCall(req, res, db));



// 2 ways to pull image - by Image Database ID or by user id and filename, decision which to use be will be taken later
// get image by filename
app.get('/image/:id/:filename', (req, res) =>{
  let photoPath = getLocalPhotoPath(req.params.id, req.params.filename)
  console.log(photoPath)
  res.sendFile(photoPath)
});

// get image by image database ID
app.get('/img/:imgID', async (req, res) =>{
  let imageLocation = await db.select('location').from('photos').where('id' ,'=' , req.params.imgID)
  console.log(imageLocation[0].location)
  res.sendFile(imageLocation[0].location)
});

app.get('/imagelist/:id', async (req, res) => {
  let imageList = await db.select('*').from('photos').where('user_id' ,'=' , req.params.id)
  res.send(imageList)
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
});



