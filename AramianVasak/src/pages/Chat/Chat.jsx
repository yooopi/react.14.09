import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../../components/Layout';
import MessageField from '../../components/MessageField';
import MessageList from '../../components/MessageList';

const Chat = props => {
  const [chats, setChats] = useState({
    1: { id: 1, title: 'Bad bot', messageList: [1] },
    2: { id: 2, title: 'Funny bot', messageList: [1] },
    3: { id: 3, title: 'Sad bot', messageList: [1] },
  });

  const [messages, setMessages] = useState({
    1: { id: 1, author: 'Bad bot', text: 'I will take control over humanity!' },
    2: { id: 2, author: 'Funny bot', text: 'Ahahahahhaha :D' },
    3: { id: 3, author: 'Sad bot', text: 'I like Radiohead songs.' },
  });

  const addMessage = ({ author, text }) => {
    const { id } = props.match.params;
    const newId = uuidv4();

    setMessages(prevState => ({ ...prevState, [newId]: { id: newId, author, text } }));
    setChats(prevState => ({
      ...prevState,
      [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
    }));
  };

  const getMessages = () => {
    const { id } = props.match.params;
    return chats[id].messageList.map(messageid => messages[messageid]);
  };

  //   useEffect(() => {
  //     const lastMessage = messages[messages.length - 1];
  //     if (lastMessage?.author !== 'Funny Bot') {
  //       setTimeout(() => addMessage({ author: 'Funny Bot', text: 'Hahahahhahaha :D' }), 500);
  //     }
  //   });

  return (
    <Layout chats={chats}>
      {/* <MessageList messages={getMessages()} />
      <MessageField addMessage={addMessage} /> */}
    </Layout>
  );
};

Chat.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Chat;
