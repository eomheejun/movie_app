import React from 'react';

function Food({favorite}) {
  return <h1>i like {favorite}</h1>
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="beer" />
      <Food favorite="pizza" />
      <Food favorite="chicken" />
    </div>
  );
}

export default App;
