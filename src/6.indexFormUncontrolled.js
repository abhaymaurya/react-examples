import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.firstName.value + ' ' + this.lastName.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" ref={(firstName) => this.firstName = firstName} />
          Last Name
          <input type="text" ref={(lastName) => this.lastName = lastName} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);