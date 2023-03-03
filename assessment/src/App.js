import React, { useState } from 'react';
import Question1 from './components/Question1';
import Question3 from './components/Question3';
function App() {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = function(event) {
    setInputVal(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" placeholder='enter your nums here' value={inputVal} onChange={handleInputChange} />
      <Question1 inputVal={inputVal} />
      <Question3/>
    </div>
  );
}

export default App;
