import * as React from 'react';
import Link from 'next/link';

type Props = {
  data: any
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/posts/[id]" as={`/posts/${data.sys.id}`}>
    <a>
      {data.sys.id}: {data.fields.title}
    </a>
  </Link>
)

export default ListItem;
