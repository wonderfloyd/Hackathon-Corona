import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetch from 'isomorphic-unfetch';

// import { User } from '../../interfaces';
// import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout/Layout';
// import ListDetail from '../../components/ListDetail';

type Props = {
  // item?: User
  post: any,
  errors?: string
}

export default class StaticPropsDetail extends React.Component<Props> {
  render() {
    const { post, errors } = this.props

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
      <Layout title={`${post ? post.fields.title : 'User Detail'}`}>
        <h2>{post.fields.title}</h2>
        <span>{new Date(post.sys.createdAt).toDateString()}</span>
        <hr />
        <p>{post.fields.postText}</p>
      </Layout>
    )
  }
}

const spaceId = 'wtfpkq7pac0f';
const accessToken = 'L6i22uWPzNrhnPRtkLAbE5zW9Fiv7cULkhV4Q-eZc6s';
const environmentId = 'master';
const baseUrl = 'https://cdn.contentful.com'; 

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  console.log('posts/[id].tsx getStaticPaths is running')

  const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`);
  const data = await res.json();
  const posts = data.items;
  const paths = posts.map((post: any) => ({
    params: { id: post.sys.id.toString() },
  }))
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params ? params.id : null;
    const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries/${id}?access_token=${accessToken}`)
    const post = await res.json();
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { post } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
