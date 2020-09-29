import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, List } from '@material-ui/core';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItems from './ListItems';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

const ChatList = props => {
  const { classes } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper),
      }}
      open
    >
      <Divider />
      <List>{ListItems}</List>
    </Drawer>
  );
};

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(ChatList);
