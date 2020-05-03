import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout/Layout';
import { getTagsForPost } from '../../data';
import List from '../../components/List';
import Link from 'next/link';

type Props = {
    posts: any,
    errors?: string
}

export default class BlogIndex extends React.Component<Props> {
    render() {
        const { posts, errors } = this.props

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
            <Layout title="Posts List by Tag">
                <h1>Posts List by Tag</h1>
                <List posts={posts} />
                <p>
                    <Link href="/">
                        <a>Go home</a>
                    </Link>
                </p>
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
