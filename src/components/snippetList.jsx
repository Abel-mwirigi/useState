import { useState, useEffect } from "react";

export default function Snippet() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    async function fetchSnippet() {
      try {
        const response = await fetch("http://127.0.0.1:8000/snippets/");
        const result = await response.json();
        setSnippets(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSnippet();
  }, []);
  return (
    <>
      <div>
        <h1>Snippets</h1>
        {snippets.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <li>{item.code}</li>
            <li>{item.language}</li>
            <li>{item.style}</li>
          </div>
        ))}
      </div>
    </>
  );
}
