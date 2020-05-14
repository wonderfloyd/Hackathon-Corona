import useSWR from 'swr';
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
        resolve(data);
      } catch (err) {
        console.warn('error fetching books from api: ', err);
        reject(err);
      }
    })
  }

  const { data, error, mutate } = useSWR(`/api/user/books?uid=${user?.nickname}`, fetcher);

  const handleDelete = async (id: string | null): Promise<void> => {
    if (!id) return;
    try {
      await fetch('/api/user/books', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
      });
      mutate();
    } catch (err) {
      console.warn('error deleting book: ', err);
    }
  }

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
      <BookForm mutate={(newBook: Book) => mutate([...data, newBook])} />
      <ul>
        {data.map((book: Book) => (
          <li key={book.name}>
            <span><b>{book.name}</b>, by <i>{book.author}</i></span>
            <button onClick={() => handleDelete(book._id)}> X </button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul {
          list-style: none;
          padding-left: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
        }
        span {
          display: block;
        }
      `}</style>
    </Layout>
  )
}

export default Books;