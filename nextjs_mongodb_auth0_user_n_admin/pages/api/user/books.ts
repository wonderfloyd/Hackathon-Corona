import { NextApiRequest, NextApiResponse } from 'next';

import { getUserBooks, insertBook, deleteBook } from '../../../utils/db';
import { Book } from '../../../interfaces';

export default async function books(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    try {
      const { uid } = req.query;
      const data: Book[] = await getUserBooks(uid.toString());
      res.status(200).json(data);
      return;
    } catch (err) {
      console.warn('Error fetching books: ', err);
      res.status(500).end(err);
      return;
    }
  }

  else if (req.method === 'POST') {
    try {
      const dbRes = await insertBook(req.body);
      res.status(200).json(dbRes);
      return;
    } catch (err) {
      console.warn('error inserting a book: ', err);
      res.status(500).end(err);
      return;
    }
  }

  else if (req.method === 'DELETE') {
    try {
      const dbRes = await deleteBook(req.body);
      res.status(200).json(dbRes);
      return;
    } catch (err) {
      console.warn('error deleting a book: ', err);
      res.status(500).end(err);
      return
    }
  }
}