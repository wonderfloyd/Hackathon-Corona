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

export const insertBook = async (book: Book): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.get('books').insert(book);
      resolve(res);
    } catch (err) {
      console.log('error inserting to db: ', err);
      reject(err);
    }
  })
  
}
