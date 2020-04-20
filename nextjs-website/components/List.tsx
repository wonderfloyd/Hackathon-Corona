import React, { useState } from 'react';
import ListItem from './ListItem/ListItem';

type Props = {
  posts: any[],
  tags: any[]
}

const List: React.FunctionComponent<Props> = ({ posts, tags }) => {
  const [filter, setFilter] = useState("");

  function filterString(text: string, filter: string) {
    return text && text.toLowerCase().includes(filter.toLowerCase());
  }

  return (
    <div>
      <p>
        Search:
        <input onChange={(e) => setFilter(e.target.value)} />
      </p>

      {/* {console.log(JSON.stringify(posts))} */}

      {posts.filter(post => {
        return filterString(post.fields.title, filter) ||
          filterString(post.fields.postText, filter) ||
          filterString(post.fields.excerpt, filter);
      }).map(post => (
        <ListItem key={post.sys.id} data={post} tags={post.fields.tags ? post.fields.tags.map((tag: any) => tags.find(tagType => tagType.sys.id == tag.sys.id).fields.tagName) : []} />
      ))}
    </div>
  )
};

export default List;
