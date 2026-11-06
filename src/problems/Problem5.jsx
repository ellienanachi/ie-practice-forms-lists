import { useState } from 'react'

export default function Problem5() {
  const [form, setForm] = useState({ title: '', note: '' })
  const [entries, setEntries] = useState([])

  function handleChange(e) {
    // TODO: update only the field that changed.
    // Use e.target.name as the key, e.target.value as the value.
    // Spread the rest of form so the other field isn't lost.
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { title, note } = form
    if (!title.trim()) return
    setEntries([...entries, { id: crypto.randomUUID(), title, note }])
    setForm({ title: '', note: '' })
  }

  return (
    <div>
      <h2>Problem 5 — Multi-Input Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
        <input name="note"  value={form.note}  onChange={handleChange} placeholder="Note" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {entries.map((e) => (
          <li key={e.id}><strong>{e.title}</strong> — {e.note}</li>
        ))}
      </ul>
    </div>
  )
}
