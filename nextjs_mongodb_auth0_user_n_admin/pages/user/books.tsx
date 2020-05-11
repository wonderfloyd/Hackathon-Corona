import useSWR from 'swr';
import Layout from '../../components/Layout';
import { useUser } from '../../utils/user';
import { Book } from '../../interfaces';

const Books: React.FC = () => {
  const { user } = useUser();

  const fetcher = async (url: string): Promise<Book[]> => {
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
      <ul>
        {data.map((book: Book) => <li key={book.name}><b>{book.name}</b>, by <i>{book.author}</i></li>)}
      </ul>
    </Layout>
  )
}

export default Books;