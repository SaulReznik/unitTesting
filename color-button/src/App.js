import { useState } from 'react';

import './App.css';

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => setButtonColor(buttonColor === 'red' ? 'blue' : 'red')}
        disabled={isDisabled}
        style={{ backgroundColor: isDisabled ? 'grey' : buttonColor }}
      >
        {`Change to ${buttonColor === 'red' ? 'blue' : 'red'}`}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={() => setIsDisabled(!isDisabled)}
      />
    </div>
  );
}

export default App;
