import React, { Component } from 'react';
import { Layout } from 'antd';
import Topper from './mainPage/component/header';
import Body from './mainPage/component/body';
import Bottom from './mainPage/component/footer';
// import WrappedSignIn from './signPage/signIn';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const { Header, Content, Footer } = Layout;
// 특정 컴포넌트 내에 span은 24로 나눠짐

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Topper />
        <Body />
        <Bottom />
      </Layout>
    );
  }
}
export default App;
