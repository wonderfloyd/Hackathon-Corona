import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout/Layout';
import Tags from '../../components/Tags/Tags';
import { getTagsForPost } from '../../utils/data';

type Props = {
  post: any,
  errors?: string
}

export default class BlogPost extends React.Component<Props> {
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
      <Layout title={`${post ? 'Blog | ' + post.fields.title : 'Blog Post'}`}>
        <h2>{post.fields.title}</h2>
        <span>{new Date(post.sys.createdAt).toDateString()}</span>
        <hr />
        <pre style={{ whiteSpace: 'pre-line', fontSize: '1.2em' }}>
          {post.fields.postText}
        </pre>
        <Tags tags={post.fields.tags} />
      </Layout>
    )
  }
}

const spaceId = process.env.spaceId;
const accessToken = process.env.accessToken;
const environmentId = process.env.environmentId;
const baseUrl = process.env.contentfulBaseUrl;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`);
  const data = await res.json();
  const posts = data.items;
  const paths = posts.filter((entry: any) => entry.sys.contentType.sys.id == "blogPost").map((post: any) => ({
    params: { id: post.sys.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params ? params.id : null;
    const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries/${id}?access_token=${accessToken}`)
    const post = await res.json();

    await getTagsForPost(post);

    return { props: { post } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
