import { useState } from 'react'

const SEED = [
  { id: '1', text: 'Buy groceries' },
  { id: '2', text: 'Walk the dog' },
  { id: '3', text: 'Do laundry' },
]

export default function Problem4() {
  const [items, setItems] = useState(SEED)

  function handleDelete(id) {
    // TODO: use filter to return only items whose id
    // does NOT match — that removes the clicked one.
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2>Problem 4 — Delete</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            {' '}
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
