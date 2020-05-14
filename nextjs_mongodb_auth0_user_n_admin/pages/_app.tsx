import React from 'react';
import { AppProps } from 'next/app';
import Home from './index';
import { useRouter } from 'next/router';

import { UserProvider, useFetchUser } from '../utils/user';

function MyApp({ Component, pageProps }: AppProps) {
  const { user, loading } = useFetchUser();
  const role = user ? user['http://localhost:3000/roles'][0] : null;
  const router = useRouter();
  let allowed: boolean = true;

  // check if a non-authorized user is trying to navigate to protected routes
  if (!user && (router.pathname.startsWith('/user') || router.pathname.startsWith('/admin'))) {
    allowed = false;
  }

  // check if a regular user is trying to navigate to admin dashboard
  if (router.pathname.startsWith('/admin') && role !== 'Admin') {
    console.log('_app role: ', role)
    allowed = false;
  }

  const ComponentToRender = allowed ? Component : Home;

  return (
    <UserProvider value={{ user, loading }}>

      <ComponentToRender {...pageProps} />

      <style global jsx>{`
        body {
          margin: 0;
          background-color: #f0f8ff;
        }
      `}</style>

    </UserProvider>
  )
}

export default MyApp;