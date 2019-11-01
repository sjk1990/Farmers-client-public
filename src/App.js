import React, { Component } from 'react';
import WrappedSignIn from './SignPage/SignIn';
// import WrappedSignUp from './SignPage/SignUp';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrappedSignIn></WrappedSignIn>
      </div>
    );
  }
}

export default App;
