import React from 'react';

import styles from './Tags.module.css';

export default ({ tags }: any) => (
  <p>
    <span>Tags:</span>
    {tags?.length && tags.map((tag: any) => <span className={styles.tag}>#{tag.name}</span>)}
  </p>
)