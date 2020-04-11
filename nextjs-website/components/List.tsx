import * as React from 'react';
import ListItem from './ListItem';

type Props = {
  posts: any[]
}

const List: React.FunctionComponent<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.sys.id}>
        <ListItem data={post} />
      </li>
    ))}
  </ul>
)

export default List;
