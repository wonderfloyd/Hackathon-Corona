import { GetServerSideProps } from 'next';

import auth0 from '../../utils/auth0';
import Layout from '../../components/Layout';

const AdminPage = () => {
  return (
    <Layout title="Admin Dashboard">
      <h1>Admin Dashboard</h1>
      <p></p>
    </Layout>
  )
}

export default AdminPage;

export const getServerSideProps: GetServerSideProps = async context => {
  console.log('admin getServerSideProps is running');
  const { req, res } = context;
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    const userRoles = session?.user['http://localhost:3000/roles'];
    if (!userRoles.includes('Admin')) {
      res.writeHead(302, {
        Location: '/user/profile'
      });
      
      res.end();
      return { props: { user: null } };
    }

    return { props: { user: session?.user } }
  }

  return { props: { user: null } };
}
