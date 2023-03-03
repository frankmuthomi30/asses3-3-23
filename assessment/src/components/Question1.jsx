import React, { useState } from 'react';

function Question1(props) {
  const [sum, setSum] = useState(0);
  

  const handleClick = () => {
    const nums = props.inputVal.split(',');
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = parseInt(nums[i].trim());
    
        total += num;
      
    }
    setSum(total);
  };

  return (
    <div>
      {/* <input type="text" placeholder='enter your nums here' value={props.inputVal} /> */}
      <button id='add' onClick={handleClick}>add</button>
      <span id='sum'>{sum}</span>
    </div>
  );
}

export default Question1;
