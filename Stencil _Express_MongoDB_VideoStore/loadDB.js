const collectionName = 'videos';
const collectionData = [
  {
    "title": "Indiana Jones",
    "description": "Indiana Jones is an American media franchise based on the adventures of Dr. Henry Walton ." +
      ", a fictional professor of archaeology that began in 1981 with the film Raiders of the Lost Ark."
  },
  {
    "title": "The Matrix",
    "description": "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis"
  }
]
;
print('Drop ' + collectionName);
db[collectionName].drop();

for (let i in collectionData){
  const doc = collectionData[i];
  print('Insert ' + JSON.stringify(doc));
  db[collectionName].insert(doc);
}
