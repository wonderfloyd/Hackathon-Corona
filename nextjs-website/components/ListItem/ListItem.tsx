import * as React from 'react';
import Link from 'next/link';

import Tags from '../../components/Tags/Tags';
import styles from './ListItem.module.css';

type Props = {
  post: any
}

const ListItem: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <div className={styles.item}>
      <Link href="/posts/[id]" as={`/posts/${post.sys.id}`}>
        <a><h3>{post.fields.title}</h3></a>
      </Link>
      <span>{new Date(post.sys.createdAt).toLocaleDateString()}</span>
      <p>{(post.fields.excerpt && post.fields.excerpt.trim()) ? post.fields.excerpt : post.fields.postText.split('\n')[0]}</p>
      <Tags tags={post.fields.tags} />
    </div>
  );
}

export default ListItem;
