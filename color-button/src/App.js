import { useState } from 'react';

import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

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
