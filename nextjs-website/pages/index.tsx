import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello Corona Hackathon! 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage;
