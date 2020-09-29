import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
});

const Header = props => {
  const { classes } = props;

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

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Header);
