import * as React from 'react';
import ListItem from './ListItem/ListItem';

type Props = {
  posts: any[]
}

const List: React.FunctionComponent<Props> = ({ posts }) => (
  <div>
    {posts.map(post => (
      <ListItem key={post.sys.id} data={post} />
    ))}
  </div>
)

export default List;
