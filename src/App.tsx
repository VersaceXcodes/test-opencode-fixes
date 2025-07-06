import React from 'react';
import { Button } from './components/ui/button';
import { Dialog } from './components/ui/dialog';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="App">
      <h1>OpenCode Fixed App</h1>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Dialog Content</h2>
        <p>This was fixed by OpenCode!</p>
      </Dialog>
    </div>
  );
}

export default App;