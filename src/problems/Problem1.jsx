import { useState } from "react";

export default function Problem1() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Problem 1 — Controlled Input</h2>
      <p>Wire up this input so it becomes a controlled component.</p>

      {/* TODO: add value and onChange props to the input below */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />

      {/* TODO: display the current value of text below */}
      <p>You typed: {text}</p>
    </div>
  );
}
