import * as React from 'react';
import ListItem from './ListItem/ListItem';

type Props = {
  posts: any[],
  filter: string
}

const List: React.FunctionComponent<Props> = ({ posts, filter }) => (
  <div>
    {posts.filter(post => {
      return post.fields.title.includes(filter);
    }).map(post => (
      <ListItem key={post.sys.id} data={post} />
    ))}
  </div>
)

export default List;
