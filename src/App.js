import React, { useState, useEffect } from "react";

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [data, setData] = useState([]);
  const [requestedUrl, setRequestedUrl] = useState("");

  useEffect(() => {
    if (requestedUrl) {
      fetch(requestedUrl)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  }, [requestedUrl]);

  return (
    <div className="container">
      <h1>Data Fetching Demo</h1>
      <div className="buttons">
        <button onClick={() => setRequestedUrl(postsUrl)}>Fetch Posts</button>
        <button onClick={() => setRequestedUrl(todosUrl)}>Fetch Todos</button>
      </div>

      <h2>Requested Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
