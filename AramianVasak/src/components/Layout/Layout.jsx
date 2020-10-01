import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import { Container, List, ListItem } from '@material-ui/core';
import Header from '../Header';
import ChatList from '../ChatList/ChatList';
import MessageField from '../MessageField';
import Message from '../Message';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: 0,
  },
  paper: {
    display: 'flex',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  chatContainer: {
    padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column',
    height: `calc(100vh - 132px)`, // Есть ли лучший способ указать высоту? Т.к. сейчас при изменении высоты инпута или шапки верстка станет кривой.
  },
  fromUser: {
    justifyContent: 'flex-end',
  },
});

const Layout = ({ classes }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = message => {
    setMessages(state => [...state, { id: uuidv4(), ...message }]);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.author !== 'Funny Bot') {
      setTimeout(() => addMessage({ author: 'Funny Bot', text: 'Hahahahhahaha :D' }), 500);
    }
  });

  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <List elevation={0} className={classes.chatContainer}>
            {messages.map(({ id, author, text }) => (
              <ListItem key={id} className={cn(author === 'User' ? classes.fromUser : null)}>
                <Message author={author} text={text} />
              </ListItem>
            ))}
          </List>
          <MessageField addMessage={addMessage} />
        </Container>
      </main>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Layout);
