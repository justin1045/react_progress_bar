import React from 'react';
import ProgressBar from './ProgressBar';

function App() {
  return (
    <div className="App flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {/* App Title */}
        <h1 className="text-3xl font-bold mb-6">React Progress Bar</h1>
        
        {/* Render the ProgressBar Component */}
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;
