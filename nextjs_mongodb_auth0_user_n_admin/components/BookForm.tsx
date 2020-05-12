import React, { ChangeEvent, useReducer } from 'react';
// import { mutate } from 'swr';
import { useUser } from '../utils/user';
import { Book } from '../interfaces';

interface State {
  name: string,
  author: string
}

interface Action {
  type: string,
  payload: string
}

const initialState = {
  name: '',
  author: ''
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload};
    case 'author':
      return { ...state, author: action.payload};
    case 'clear':
      return { ...initialState }
    default:
      return state;
  }
}

// const fetcher = async (url: string, state: State) => {
//   fetch(url, {
//     method: 'post',
//     body: JSON.stringify(state)
//   })
// }

const BookForm: React.FC<{ mutate: (nb: Book) => void}> = ({ mutate }) => {

  const { user } = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  // const { data } = useSWR(['/api/user/books', state], fetcher);
  // console.log(`data from swr: `, data)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value })
  }

  const handleSubmit = async () => {
    if (!state.author.length || !state.name.length || !user) {
      alert('Please fill in both fields to add a book.');
      return;
    } 

    const newBook: Book = { ...state, user: user.nickname, _id: null }
    const res = await fetch('/api/user/books', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    });
    const data = await res.json();
    console.log('insertBook data: ', data);

    mutate(newBook);
    // mutate('/api/user/books', { state })
    dispatch({ type: 'clear', payload: '' })
  }

  return (
    <div className="book-form">
      <h5>Add a Book:</h5>
      <label>
        Name:
        &nbsp;
        <input type="text" name="name" value={state.name} onChange={e => handleChange(e)} />
      </label>
      &nbsp;

      <label>
        Author:
        &nbsp;
        <input type="text" name="author" value={state.author} onChange={e => handleChange(e)} />
      </label>
      &nbsp;

      <button onClick={handleSubmit}>Add Book</button>

      <style jsx>{`
        .book-form {
          margin: 2% 0;
          padding: 5%;
          border: 0.5px solid;
        }

        h5 {
          margin-top: 0;
        }
      `}</style>
    </div>
  )
}

export default BookForm;