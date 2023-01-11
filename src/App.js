import Card from './component/Card';
import React, { useState } from 'react';
import "./App.css"
import Dialog from './component/Dialog';
import Card2 from './component/Card2';
import { useDispatch } from 'react-redux';
import { setValue } from './features/DialogInput/DialogSlice';

function App() {

  const dispatch = useDispatch() // from react-redux action dispatching 
  const [open, setopen] = useState(false)

  const handleChange = (e) => { dispatch(setValue(e.target.value)) }

  return (
    <div className="App">

      <input
        onChange={handleChange}
        placeholder='enter text' />
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
