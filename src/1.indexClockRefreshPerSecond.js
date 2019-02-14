import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
// to Bind THIS
//either this
  componentDidMount() {
    this.timerID = setInterval(
      this.tick,
      1000
    );
  }
  tick = () => {
    this.setState({
      date: new Date()
    });
  }

//or this
  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }
  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
