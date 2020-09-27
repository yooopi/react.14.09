import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, message }) => {
    return (<div> { author}: { message}</div>)
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default Message