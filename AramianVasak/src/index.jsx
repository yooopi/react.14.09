import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx'

// здесь надо пройтись по массиву с сообщениями
// здесь должен быть хендлер, который принимает в себя 3 параметра
// с ключами объекта из message, через props передаем его в MessageField
class App extends Component {
  state = {
    messages: [{
      id: uuidv4(),
      author: 'idk',
      text: 'idk',
    }],
  }

  render() {
    return (<MessageField messages={this.state.messages} />)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))