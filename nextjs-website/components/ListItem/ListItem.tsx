import * as React from 'react';
import Link from 'next/link';

import styles from './ListItem.module.css';

type Props = {
  data: any
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <div className={styles.item}>
    <Link href="/posts/[id]" as={`/posts/${data.sys.id}`}>
      <a><h3>{data.fields.title}</h3></a>
    </Link>
    <span>{new Date(data.sys.createdAt).toLocaleDateString()}</span>
    <p>{(data.fields.excerpt && data.fields.excerpt.trim()) ? data.fields.excerpt : data.fields.postText.split('\n')[0]}</p>
    <p>
        {
          JSON.stringify(data.fields.tags) //.filter((t: null) => t !== undefined).map((tag: { tagName: string; }) => ("#" + tag.tagName + " "))
        }
    </p>
  </div>
)

export default ListItem;
