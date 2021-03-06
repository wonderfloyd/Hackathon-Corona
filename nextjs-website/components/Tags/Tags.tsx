import React from 'react';

import styles from './Tags.module.css';
import Link from 'next/link';

export default ({ tags }: any) => (
  <p>
    <span>{tags?.length ? "Tags:" : ""}</span>
    {tags?.length && tags.map((tag: any) => <Link key={tag.sys.id} href="/tags/[id]" as={`/tags/${tag.sys.id}`}><span key={tag.sys.id} className={styles.tag}>#{tag.name}</span></Link>)}
  </p>
)