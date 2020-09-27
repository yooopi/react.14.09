import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx';
import Message from './components/Message.jsx';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.author != 'Bot') {
      setTimeout(() => addMessage({ author: "Bot", message: "The student was a lazy dude" }), 500);
    }
  }, [messages])

  const addMessage = (message) => {
    setMessages([...messages, { id: uuidv4(), ...message }]);
  }

  return (
    <div>
      <MessageField addMessage={addMessage} />
      <ul>
        {messages.map(({ id, author, message }) => (
          <Message key={id} author={author} message={message} />
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));