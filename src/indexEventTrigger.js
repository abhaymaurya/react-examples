import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = (parameter, e) => {
    console.log('this is:', this);
    console.log('parameter is:', parameter);
    console.log('e is:', e);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this, 'parameter')}>
        Click me
      </button>
    );
  }
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('root')
);
