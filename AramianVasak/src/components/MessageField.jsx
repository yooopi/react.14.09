import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MessageField extends Component {
    state = {
        author: "",
        message: "",
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { addMessage } = this.props;
        addMessage(this.state);
    }

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { author, message } = this.state;

        return <form onSubmit={this.onSubmit}>
            <input type="text" name="author" placeholder="author" onChange={this.onChange} value={author} />
            <input type="text" name="message" placeholder="message" onChange={this.onChange} value={message} />
            <button type="submit">Send</button>
        </form>
    }
}

MessageField.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default MessageField