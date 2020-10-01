import React from 'react';
import cn from 'classnames';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={cn(classes.appBar, classes.appBarShift)}>
        <Toolbar>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>
            Funny Bot
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
