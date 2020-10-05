import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Header from '../Header';
import ChatList from '../ChatList';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: 0,
  },
});

const Layout = ({ children, classes, chats }) => {
  return (
    <div className={classes.root}>
      <Header />
      <ChatList chats={chats} />
      <Container maxWidth={false} className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.string.isRequired,
  chats: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Layout);
