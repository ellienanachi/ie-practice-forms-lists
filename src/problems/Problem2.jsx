import { useState } from 'react'

export default function Problem2() {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  function handleSubmit(e) {
    // TODO:
    // 1. Prevent the page from reloading
    e.preventDefault()
    // 2. Trim text — skip (return early) if it's empty
    const trimmed = text.trim()
    if (!trimmed) return
    // 3. Add a new object to items: { id: crypto.randomUUID(), text: trimmed }
    setItems([...items, { id: crypto.randomUUID(), text: trimmed }])
    // 4. Clear the input back to ''
    setText('')
  }

  return (
    <div>
      <h2>Problem 2 — Form Submit</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add item..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
