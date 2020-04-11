import { GetStaticProps } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout/Layout';
import List from '../../components/List';

type Props = {
  posts: any[],
  errors?: string
}

const BlogIndex = ({ posts, errors }: Props) => {
  if (errors) {
    return (
      <Layout title={`Error`}>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title="Posts List">
      <h1>Posts List</h1>
      <List posts={posts} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const spaceId = process.env.spaceId;
  const accessToken = process.env.accessToken;
  const environmentId = process.env.environmentId;
  const baseUrl = process.env.contentfulBaseUrl; 

  try {
    const allPosts = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`);
    const posts = await allPosts.json();
    return { props: { posts: posts.items } }
  } catch (err) {
    console.log('failed fetching posts: ', err);
    return { props: { errors: err.message } };
  }
}

export default BlogIndex;
