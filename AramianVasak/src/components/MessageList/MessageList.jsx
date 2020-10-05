import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Message from '../Message';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
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

const MessageList = ({ messages, classes }) => {
  return (
    <List elevation={0} className={classes.chatContainer}>
      {messages.map(({ id, author, text }) => (
        <ListItem key={id} className={cn(author === 'User' ? classes.fromUser : null)}>
          <Message author={author} text={text} />
        </ListItem>
      ))}
    </List>
  );
};

MessageList.propTypes = {
  //   messages: PropTypes.objectOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       author: PropTypes.string.isRequired,
  //       text: PropTypes.string.isRequired,
  //     }),
  //   ).isRequired,
  messages: PropTypes.arrayOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(MessageList);
