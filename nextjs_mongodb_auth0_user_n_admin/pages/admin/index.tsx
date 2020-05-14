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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    const user = session ? session.user : null;
    
    return { props: { user } };
  }

  return { props: { user: null } };
}
