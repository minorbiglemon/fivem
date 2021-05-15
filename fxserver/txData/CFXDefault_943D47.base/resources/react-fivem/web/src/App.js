import React, { useEffect, useState } from 'react';
import { useCoreService, useVisibility } from './core/hooks/useCoreService';
import Phone from './components/Phone';

const useKey = (key) => {
  const [pressed, setPressed] = useState(false);
  const match = (event) => key.toLowerCase() === event.key.toLowerCase();
  const onDown = (event) => {
    if (match(event)) {
      setPressed(true);
    }
  };
  const onUp = (event) => {
    if (match(event)) {
      setPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, [key]);

  return pressed;
};

function App() {
  useCoreService();
  const kKey = useKey('k');
  console.log('kKey', kKey);
  const visibility = useVisibility();
  // const [showUI, setShowUI] = useState(visibility);
  return (
    // <div style={{ visibility: visibility ? 'visible' : 'hidden', minHeight: '100%' }}>
    <div style={{ visibility: visibility ? 'visible' : 'visible', minHeight: '100%' }}>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'
      }}
      >
        <h1 style={{ color: 'white' }}>Testing react app</h1>
        <Phone open />
      </div>
    </div>
  );
}

export default App;
