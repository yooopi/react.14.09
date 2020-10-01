import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';

const styles = theme => ({
  message: {
    padding: theme.spacing(1),
  },
});

const Message = ({ author, text, classes }) => {
  return (
    <Paper component="span" className={cn(classes.message)}>
      {author}
      {': '}
      {text}
    </Paper>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Message);
