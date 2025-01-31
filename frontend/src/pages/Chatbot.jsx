import React from 'react';

const Chatbot = () => {
  // Function to handle redirection to the chatbot running on port 5175
  const handleRedirect = () => {
    window.location.href = 'http://localhost:5175/'; // Redirect to the chatbot
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Chatbot</h1>
      <button
        onClick={handleRedirect}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Go to Chatbot
      </button>
    </div>
  );
};

export default Chatbot;
