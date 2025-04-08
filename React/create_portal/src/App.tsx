import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [opened, setOpened] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setOpened(true)}>Нажми</button>
      <Modal opened={opened} onClose={()=>setOpened(false)}>123</Modal>
    </div>
  );
}

export default App;
