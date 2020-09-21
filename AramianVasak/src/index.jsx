import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx';
import Message from './components/Message.jsx';
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  state = {
    messages: []
  };

  componentDidUpdate(prevState) {
    const { messages } = this.state;
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.author !== "Bot") {
      setTimeout(() => this.addMessage({ author: "Bot", message: "The student was a lazy dude" }), 500)
    }
  }

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] })
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <ul>
          {messages.map(({ id, author, message }) => (
            <Message key={id} author={author} message={message} />
          ))}
        </ul>
        <MessageField addMessage={this.addMessage} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))