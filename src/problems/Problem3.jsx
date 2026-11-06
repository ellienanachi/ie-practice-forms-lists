import { useState } from 'react'

const SEED = [
  { id: '1', text: 'Read the lecture slides', completed: false },
  { id: '2', text: 'Practice controlled inputs', completed: false },
  { id: '3', text: 'Finish Problem 2', completed: true },
]

export default function Problem3() {
  const [items, setItems] = useState(SEED)

  function handleToggle(id) {
    // TODO: use map to return a new array where the item
    // with the matching id has completed flipped,
    // and all other items are returned unchanged.
    setItems(
      items.map((item) =>
        item.id === id
      ? { ...item, completed: !item.completed }
      : item
      )
    )
  }

  return (
    <div>
      <h2>Problem 3 — Toggle</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            {' '}{item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
