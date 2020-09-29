import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    background: '#dfdfdf',
    color: 'white',
    padding: theme.spacing(1),
    width: '100%',
  },
  item: {
    margin: theme.spacing(1),
  },
  message: {
    width: '100%',
  },
  submit: {
    minWidth: 'auto',
  },
});

const MessageField = props => {
  const initialState = { author: 'User', text: '' };
  const [message, setMessages] = useState(initialState);

  const onSubmit = event => {
    event.preventDefault();
    const { addMessage } = props;
    addMessage(message);
    setMessages(initialState);
  };

  const onChange = ({ target }) => {
    const { value } = target;
    setMessages({
      author: 'User',
      text: value,
    });
  };

  const { classes } = props;

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Input
        className={cn(classes.item, classes.message)}
        placeholder="Message"
        type="text"
        value={message.text}
        required
        onChange={onChange}
      />
      <Button
        className={cn(classes.item, classes.submit)}
        type="submit"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </form>
  );
};

MessageField.propTypes = {
  addMessage: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(MessageField);
