import * as React from 'react';
import Link from 'next/link';

import styles from './ListItem.module.css';

type Props = {
  data: any
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/posts/[id]" as={`/posts/${data.sys.id}`}>
    <a className={styles.item}>
      <h3>{data.fields.title}</h3>
      <span>{new Date(data.sys.createdAt).toLocaleDateString()}</span>
      <p>{data.fields.excerpt}</p>
    </a>
  </Link>
)

export default ListItem;
