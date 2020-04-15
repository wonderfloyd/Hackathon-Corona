import React, { useState } from 'react';
import ListItem from './ListItem/ListItem';

type Props = {
  posts: any[]
}

const List: React.FunctionComponent<Props> = ({ posts }) => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <p>
        Search:
        <input id="search" onChange={(e) => setFilter(e.target.value)} />
      </p>
      {posts.filter(post => {
        return post.fields.title.includes(filter);
      }).map(post => (
        <ListItem key={post.sys.id} data={post} />
      ))}
    </div>
  )
};

export default List;
