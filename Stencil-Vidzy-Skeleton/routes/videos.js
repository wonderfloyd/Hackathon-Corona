const express = require('express');
const router = express.Router();

const monk = require('monk');
const db = monk('localhost:27017/videos');

router.get('/', function(req, res) {
  const collection = db.get('videos');
  console.log('Get Videos, collection: ' + collection.name);
    collection.find({}, function(err, videos){
        if (err) throw err;
        console.log('videos: ' + JSON.stringify(videos));
      	res.json(videos);
    });
});

// get and put both access single elements
router.get('/:id', function(req, res) {
    console.log('Get Video ' + req.params.id);
  const collection = db.get('videos');
  collection.findOne({ _id: req.params.id }, function(err, video){
        if (err) throw err;

      	res.json(video);
    });
});

router.put('/:id', function(req, res){
    console.log('Put Video ' + req.params.id);
  const collection = db.get('videos');
  collection.update({
        _id: req.params.id
    },
    {
        title: req.body.title,
        description: req.body.description
    }, function(err, video){
        if (err) throw err;

        res.json(video);
    });
});

router.post('/', function(req, res){
    console.log('Post Videos');
  const collection = db.get('videos');
  collection.insert({
        title: req.body.title,
        description: req.body.description
    }, function(err, video){
        if (err) throw err;

        res.json(video);
    });
});


router.delete('/:id', function(req, res){
  const collection = db.get('videos');
  collection.remove({ _id: req.params.id }, function(err, video){
        if (err) throw err;

        res.json(video);
    });
});


module.exports = router;
