import React, { useState, useEffect } from 'react';

function ProgressBar() {
  // State to track the progress percentage
  const [progress, setProgress] = useState(0);
  
  // State to track the status (Loading or Complete)
  const [status, setStatus] = useState('Loading');

  // Effect to manage the progress increment and status
  useEffect(() => {
    if (progress === 100) {
      setStatus('Complete');
      return;
    }

    // Increment the progress by 1% every 100ms
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(timer); // Stop the timer when progress reaches 100%
        return 100;
      });
    }, 200); // Adjust the speed here

    // Cleanup the timer when the effect is rerun
    return () => clearInterval(timer);
  }, [progress]); // Only re-run the effect when the progress changes

  return (
    <div className="p-8 w-96">

      <div className="w-full bg-gray-200 rounded-full h-6 mb-6">
        <div
          className="h-full rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: progress === 100 ? 'green' : 'blue',
          }}
        ></div>
      </div>

      <div className="text-center text-lg font-semibold">
        <p>{`${status}: ${progress}%`}</p>
      </div>
    </div>
  );
}

export default ProgressBar;
