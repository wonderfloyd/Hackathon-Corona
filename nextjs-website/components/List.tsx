import React, { useState } from 'react';
import ListItem from './ListItem/ListItem';

type Props = {
  posts: any[]
}

const List: React.FunctionComponent<Props> = ({ posts }) => {
  const [filter, setFilter] = useState("");
  
  function filterString(text:string, filter:string) {
    return text && text.toLowerCase().includes(filter.toLowerCase());
  }

  return (
    <div>
      <p>
        Search:
        <input onChange={(e) => setFilter(e.target.value)} />
      </p>
      {posts.filter(post => {
        return  filterString(post.fields.title, filter) ||
                filterString(post.fields.postText, filter) ||
                filterString(post.fields.excerpt, filter);
      }).map(post => (
        <ListItem key={post.sys.id} data={post} />
      ))}
    </div>
  )
};

export default List;
