import { useSelector, useDispatch } from 'react-redux';
import { Books } from './components/Books';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';
import { getBooks, deleteAll } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.operationsReducers);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [bookToBeEdited, setBookToBeEdited] = useState('');

  const handleEdit = (bookObj) => {
    setEditFormVisibility(true);
    setBookToBeEdited(bookObj);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
    setBookToBeEdited('');
  };

  return (
    <div className="custom-container">
      <h1 className="heading">Book-List</h1>
      <br />
      <Form
        editFormVisibility={editFormVisibility}
        cancelUpdate={cancelUpdate}
        bookToBeEdited={bookToBeEdited}
      />
      {books.length > 0 ? (
        <>
          <Books
            books={books}
            editFormVisibility={editFormVisibility}
            handleEdit={handleEdit}
          />
          {books.length > 1 && (
            <button
              className="btn btn-outline-danger btn-md delete-all"
              onClick={() => dispatch(deleteAll())}
            >
              DELETE ALL
            </button>
          )}
        </>
      ) : (
        <div className="message-box">
          No books found, add a book to display it here
        </div>
      )}
    </div>
  );
}

export default App;
