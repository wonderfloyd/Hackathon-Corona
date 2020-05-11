import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useUser } from '../utils/user';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  const { user, loading } = useUser();
  const admin: boolean = user ? user['http://localhost:3000/roles'].includes('Admin') : false;
  return (
    <>
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
              : <a href="/api/login">Login</a>
          }
          {' '}|{' '}
          {admin && <Link href="/admin"><a>Admin</a></Link>}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
  )
}

export default Layout
