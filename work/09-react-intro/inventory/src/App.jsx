import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const handleReorder = () => setCount(5);

  return (
    <div className="app-container">
      <span className="inventory-count">Inventory: {count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={!count}>-</button>
      
      {count === 0 && <Reorder onReorder={handleReorder} />}
    </div>
  );
}

export default App;