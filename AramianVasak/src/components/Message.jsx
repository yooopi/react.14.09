import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render() {
        const { author, message } = this.props;
        return (<div> { author}: { message}</div>)
    }
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default Message