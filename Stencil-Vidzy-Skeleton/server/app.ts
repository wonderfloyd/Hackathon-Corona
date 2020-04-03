import * as express from 'express'
import * as path from 'path'
import * as videos from '../routes/videos';

console.log('Initialize server/app.ts');

const port = 4001;

const app:express.Application = express();

app.use(express.static(path.join(__dirname, '../resources')));
app.use(express.static(path.join(__dirname, '../www/build')));
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
  const reqKeys = Object.keys(req);
  console.log("Received Request " + reqKeys);
  console.log("Url: " + req.url);
  const file = path.join(__dirname, '../views', 'index.html');
  console.log("Send Response " + file);
  res.sendFile(file)
});

app.use('/api/videos', videos);

app.listen(port, () => {
  console.log('listening on port ' + port)
});
