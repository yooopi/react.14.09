import React, { Component } from 'react';

// инпуты и кнопки, создаем новый объект и записываем в массив с сообщениями
// как записать в state?
class MessageField extends Component {
    render() {
        const { messages } = this.props;

        return (messages.map((item) => <p>{item}</p>))
    }
}

export default MessageField