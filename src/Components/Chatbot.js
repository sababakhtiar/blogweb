import React from 'react';

const Chatbot = () => {
  return (
    <>
      {/* Dialogflow intent create */}
      <df-messenger
        intent="WELCOME"
        chat-title="blogweb"
        agent-id="4eb332ff-ece0-4024-b11d-348eb0dd97a1"
        language-code="en"
        style={{
          '--df-messenger-button-titlebar-color': '#000000', // Change title bar color
          '--df-messenger-button-titlebar-font-color': 'white', // Change title bar font color
          '--df-messenger-font-color': 'black', // Change font color
          '--df-messenger-chat-background-color': 'white' // Change chat background color
        }}
      ></df-messenger>
    </>
  );
};

export default Chatbot;
