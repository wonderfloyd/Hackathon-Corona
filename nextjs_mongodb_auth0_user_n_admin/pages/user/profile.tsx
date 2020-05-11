import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import auth0 from '../../utils/auth0';
import Layout from '../../components/Layout';

export default function Profile(props: any) {
  
  const { user } = props;

  return (
    <Layout title={`Profile Page: ${user?.name}`}>
      <h1>Profile</h1>

      {user && (
        <>
          <p>Profile:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <Link href="/user/books"><a>My Books</a></Link>
        </>
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  console.log('getServerSideProps is running');
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    const user = session ? session.user : null;
    if (!user) {
      res.writeHead(302, {
        Location: '/api/login'
      });
      res.end();
      return { props: { user: null } };
    }

    return { props: { user } }
  }
  return { props: { user: null } };
}
