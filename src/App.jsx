import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [result, setResult] = useState("");

  const getArea = () => {
    const area = Number(length) * Number(width);
    setResult(`The area of the rectangle is ${area}`);
  };

  const getPerimeter = () => {
    const perimeter = 2 * (Number(length) + Number(width));
    setResult(`The perimeter of the rectangle is ${perimeter}`);
  };

  return (
    <div>
      <h1>Rectangle Solver</h1>

      <div>

        <label>Length:</label>
        <input type='number' value={length} onChange={(e) => setLength(e.target.value)} />


        <div>
          <label>Width</label>
          <input type='number' value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <Button color='blue' padding='50px' variant='primary' className='ms-3' onClick={getArea}>Get Area</Button>
        <Button color='green' padding='50px' variant='primary' className='ms-3' onClick={getPerimeter}>Get Perimeter</Button>
      </div>

      <div>
        <p>{result}</p>
      </div>
    </div>

  );


}

export default App;