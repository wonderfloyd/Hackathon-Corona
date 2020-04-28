import fetch from 'isomorphic-unfetch';

const spaceId = process.env.spaceId;
const accessToken = process.env.accessToken;
const environmentId = process.env.environmentId;
const baseUrl = process.env.contentfulBaseUrl;

export const getTagsForPost = async (post: any) => {
    if (post.fields.tags)
        for (let postTag of post.fields.tags) {
            try {
                const res = await fetch(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries/${postTag.sys.id}?access_token=${accessToken}`)
                const tag = await res.json();

                postTag.name = tag.fields.tagName;
            } catch (err) {
                postTag.name = "!Error!";
            }
        }
}