import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//manage greetings
//greeting component 1
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
//greeting component 2
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
//greeting component to choose eithe 1 or 2
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

//button component 1
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
//button component 2
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

//show the state of user
function ShowUserState(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

//show only when logged in
function Dashboard(props) {
  if (!props.isLoggedIn) {
    return null;
  }

  return (
    <div>
      Welcome to dashboard
    </div>
  );
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    //based on condition show either button 1 or 2
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <ShowUserState isLoggedIn={isLoggedIn} />
        <Dashboard isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);