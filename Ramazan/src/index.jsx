import React from 'react';
import ReactDOM from 'react-dom';
// import Massage from './components/Massage.jsx';

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      massage: [],
    };
    this.onClick = this.onClick.bind(this);
    this.addMassage = this.addMassage.bind(this);
  }

  onClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  addMassage() {
    const { massage, count } = this.state;
    this.setState({ massage: [...massage, `сообщение: ${count}`] });
    console.log(this.massage);
  }
  render() {
    const { count, massage } = this.state;

    return (
      <div>
        <p>{count}</p>
        <button onClick={this.onClick}>increment</button>
        <button onClick={this.addMassage}>addMassage</button>
        <ul>
          {massage.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));
