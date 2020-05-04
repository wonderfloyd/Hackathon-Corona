import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetch from 'isomorphic-unfetch';
import BlogIndex from '../../components/BlogIndex';
import { getTagsForPost } from '../../utils/data';

type Props = {
  posts: any,
  errors?: string
}

const BlogIndexTags = ({ posts, errors }: Props) => {
  return (
    <BlogIndex posts={posts} errors={errors} title="Posts List by Tag" />
  );
}

const spaceId = process.env.spaceId;
const accessToken = process.env.accessToken;
const environmentId = process.env.environmentId;
const baseUrl = process.env.contentfulBaseUrl;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`);
  const data = await res.json();
  const entries = data.items;
  const paths = entries.filter((entry: any) => entry.sys.contentType.sys.id == "tag").map((post: any) => ({
    params: { tag: post.sys.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params ? params.tag : null;
    const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`);
    const data = await res.json();
    const entries = data.items;
    const posts = entries.filter((entry: any) => entry.sys.contentType.sys.id == "blogPost").filter((entry: any) => entry.fields.tags?.some((tag: any) => tag.sys.id == id));

    for (let post of posts)
      await getTagsForPost(post);

    return { props: { posts } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

export default BlogIndexTags;