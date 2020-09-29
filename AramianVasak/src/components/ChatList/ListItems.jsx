import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AndroidIcon from '@material-ui/icons/Android';
import AdbIcon from '@material-ui/icons/Adb';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

export default (
  <div>
    <ListItem button selected>
      <ListItemIcon>
        <AndroidIcon />
      </ListItemIcon>
      <ListItemText primary="Funny Bot" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AdbIcon />
      </ListItemIcon>
      <ListItemText primary="Bad Bot" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SentimentVeryDissatisfiedIcon />
      </ListItemIcon>
      <ListItemText primary="Sad Bot" />
    </ListItem>
  </div>
);
