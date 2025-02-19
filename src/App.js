import React, { useState } from 'react';


function App() {

  const [index, setIndex] = useState(0);


  function handleIncrement() {
    setIndex(index + 1);
  }

  return (
    <div>
      <h1>Clicks: {index}</h1>
      <button onClick={handleIncrement}>Click Me To Increment</button>
    </div>
  )
}

export default App;