import React from 'react';
import './index.css';

const App = () => {

  function changeBackGrounf(event) {
    const btn = event.target;

    if (btn.className === 'btnWhite') {
      document.body.className = 'btnDark';
      btn.innerText = 'LIGHT';
    } else {
      document.body.className = 'btnWhite';
      btn.innerText = 'DARK';
    }
  }

  return (
    <div>
      <button onClick={changeBackGrounf} className="btnWhite">
        DARK
      </button>
    </div>
  );
};

export default App;