import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch';

import BlogIndex from '../../components/BlogIndex';
import { getTagsForPost } from '../../data';

type Props = {
  posts: any[],
  errors?: string
}

const BlogIndexMain = ({ posts, errors }: Props) => {
  return (
    <BlogIndex posts={posts} errors={errors} title="Posts List" />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const spaceId = process.env.spaceId;
  const accessToken = process.env.accessToken;
  const environmentId = process.env.environmentId;
  const baseUrl = process.env.contentfulBaseUrl;

  try {
    const allEntities = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`);
    const entities = await allEntities.json();
    const posts = entities.items.filter((entry: any) => entry.sys.contentType.sys.id == "blogPost");

    for (let post of posts)
      await getTagsForPost(post);

    return { props: { posts: posts } }
  } catch (err) {
    console.log('failed fetching posts: ', err);
    return { props: { errors: err.message } };
  }
}

export default BlogIndexMain;
