import { NextApiRequest, NextApiResponse } from 'next';

import { getUserBooks } from '../../../utils/db';
import { Book } from '../../../interfaces';

export default async function books(req: NextApiRequest, res: NextApiResponse): Promise<void> {
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