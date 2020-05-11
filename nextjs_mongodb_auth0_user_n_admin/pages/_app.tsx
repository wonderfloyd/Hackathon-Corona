import React from 'react';
import { AppProps } from 'next/app';

import { UserProvider, useFetchUser } from '../utils/user';

function MyApp({ Component, pageProps }: AppProps) {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Component {...pageProps} />
    </UserProvider>
    
  )
}

export default MyApp;