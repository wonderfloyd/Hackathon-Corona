import Layout from "./Layout/Layout"
import List from "./List"
import Link from "next/link"

type Props = {
  posts: any[],
  errors?: string,
  title: string
}

const BlogIndex = ({ posts, errors, title }: Props) => {
  if (errors) {
    return (
      <Layout title={`Error`}>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <List posts={posts} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default BlogIndex;