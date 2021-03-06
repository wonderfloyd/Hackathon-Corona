import auth0 from '../../utils/auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    await auth0.handleLogin(req, res, {
      authParams: {
        scope: 'openid profile'
      }
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}