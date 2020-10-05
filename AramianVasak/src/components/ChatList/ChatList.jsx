import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AndroidIcon from '@material-ui/icons/Android';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const ChatList = ({ chats, classes }) => {
  console.log(Object.keys(chats));

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper),
      }}
      open
    >
      <Divider />
      <List>
        {Object.fromEntries(
          Object.entries(chats).map((id, title) => (
            <Link key={id} to={`/chat/${id}`}>
              <ListItem button selected>
                <ListItemIcon>
                  <AndroidIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          )),
        )}
      </List>
    </Drawer>
  );
};

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(ChatList);

{
  /* <Link key={id} to={`/chat/${id}`}>
            <ListItem button selected>
              <ListItemIcon>
                <AndroidIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
          </Link> */
}
