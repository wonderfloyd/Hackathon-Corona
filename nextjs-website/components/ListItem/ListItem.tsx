import * as React from 'react';
import Link from 'next/link';

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
      <p>{post.fields.tags?.length > 0 ? <span>Tags:</span> : ""}{post.fields.tags?.length > 0 ? post.fields.tags.map((tag: any) => <span className={styles.tag}>#{tag.name}</span>) : ""}</p>
    </div>
  );
}

export default ListItem;
