// LoadingSpinner.js
import React from 'react';
import { quantum } from 'ldrs';

quantum.register();

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999', // Adjust the z-index as needed
      }}
    >
      <l-quantum size="45" speed="1.75" color="black"></l-quantum>
    </div>
  );
};

export default LoadingSpinner;
