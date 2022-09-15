import './styles/App.css';
import Activity from './components/Activity';
import React from 'react';

function App() {
  return (
    <div className="App">

      <div className='objects'>
        <p className='logo'>anti<span>Boring</span></p>
        <Activity />
        <p className='made-by'>Made by <a href="https://github.com/jmakhmudov" target='_blank'>JM</a></p>
      </div>
    </div>
  );
}

export default App;
