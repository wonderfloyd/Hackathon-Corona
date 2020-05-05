import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { UserProvider, useFetchUser } from '../utils/user';

type Props = {
  title?: string,
  // user: any,
  // loading: boolean
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  // user,
  // loading
}) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          {
            !loading && user
              ? <span>
                  <Link href="/user/profile"><a>{user.name}</a></Link>
                  {' '}|{' '}
                  <a href="/api/logout">Logout</a>
                </span>
              :<a href="/api/login">Login</a>
          }
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </UserProvider>
  )
}

export default Layout
