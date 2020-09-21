import React, { Component } from 'react';

//компонент со строкой сообщения. Именно в него рендерится каждый объект из массива
class Message extends Component {
    render() {
        return (<button>Add message</button>)
    }
}

export default Message