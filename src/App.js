import Card from './component/Card';
import React, { useState } from 'react';
import "./App.css"
import Dialog from './component/Dialog';
import Card2 from './component/Card2';

function App() {

  const [open, setopen] = useState(false)

  return (
    <div className="App">

      <div
        className="mt-10 text-center">
        <button onClick={() => setopen(true)}
          className="btn">Rajwada</button>
      </div>

      <Dialog
        show={open}
        confirm={() => setopen(false)}
        component={<Card />}
      />

    </div>
  );
}

export default App;
