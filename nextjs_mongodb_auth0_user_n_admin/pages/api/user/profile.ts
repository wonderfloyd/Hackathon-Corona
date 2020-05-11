import auth0 from '../../../utils/auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function me(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}