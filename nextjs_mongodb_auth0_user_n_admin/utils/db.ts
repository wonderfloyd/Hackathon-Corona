import monk from 'monk';

import { Book } from '../interfaces';

const db = monk('localhost:27017/next-auth0-mongo');

export const getUserBooks = async (nickname: string): Promise<Book[]> => {
  return new Promise((resolve, reject) => {
    db.get('books').find({ user: nickname }).then(data => {
      resolve(data);
    })
    .catch(err => {
      console.log('error fetcing from db: ', err);
      reject(err);
    })
  })
  
}
