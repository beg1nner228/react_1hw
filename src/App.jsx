import { useState } from 'react'
import './App.css'

const favouriteBooks = [
 { id: "id-1", name: "JS for beginners" },
 { id: "id-2", name: "React basics" },
 { id: "id-3", name: "React Router overview" },
 { id: "id-4", name: "Redux in depth" },
];

function renderBooks(books) {
    return books.map((book) => (<li key={book.id}>{book.name}</li>));
}

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <h1>Test</h1>
    <ul className='test'>
      {renderBooks(favouriteBooks)}
    </ul>
    </>
  )
}

export default App
