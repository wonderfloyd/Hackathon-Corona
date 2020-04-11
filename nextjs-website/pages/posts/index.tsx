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
    <Layout title="Users List">
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
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  console.log('posts/index.tsx getStaticProps is running')
  const spaceId = 'wtfpkq7pac0f';
  const accessToken = 'L6i22uWPzNrhnPRtkLAbE5zW9Fiv7cULkhV4Q-eZc6s';
  const environmentId = 'master';
  const baseUrl = 'https://cdn.contentful.com'; 

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
