import { useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <Button variant="default">asdas</Button>
    </div>
  );
}

export default App;
