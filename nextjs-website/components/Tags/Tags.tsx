import React from 'react';

import styles from './Tags.module.css';
import Link from 'next/link';

export default ({ tags }: any) => (
  <p>
    <span>Tags:</span>
    {tags?.length && tags.map((tag: any) => <Link href="/tags/[id]" as={`/tags/${tag.sys.id}`}><span key={tag.sys.id} className={styles.tag}>#{tag.name}</span></Link>)}
  </p>
)