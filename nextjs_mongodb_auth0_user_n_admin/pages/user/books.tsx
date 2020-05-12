import useSWR, { mutate } from 'swr';
import Layout from '../../components/Layout';
import { useUser } from '../../utils/user';
import { Book } from '../../interfaces';

import BookForm from '../../components/BookForm';

const Books: React.FC = () => {
  const { user } = useUser();

  const fetcher = async (url: string): Promise<Book[]> => {
    console.log('books fetcher is running')
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log('books length: ', data.length)
        resolve(data);
      } catch (err) {
        console.warn('error fetching books from api: ', err);
        reject(err);
      }
    })
  }
  
  const { data, error } = useSWR(`/api/user/books?uid=${user?.nickname}`, fetcher);

  if (error) {
    console.log('error in books swr: ', error)
    return <Layout><h3>Error fetching Your data!</h3></Layout>
  }

  if (!data) {
    return <Layout><h3>Loading...</h3></Layout>
  }

  return (
    <Layout>
      <h2>Your Reading List</h2>
      <BookForm mutate={(nb: Book) => mutate('/api/user/books', { ...data, nb })}/>
      <ul>
        {data.map((book: Book) => <li key={book.name}><b>{book.name}</b>, by <i>{book.author}</i></li>)}
      </ul>
    </Layout>
  )
}

export default Books;