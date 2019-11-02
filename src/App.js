import React, { Component } from 'react';
import {Layout} from 'antd';

import './App.css';

import Topper from './mainPage/component/header';
import Body from './mainPage/component/body';
import Bottom from './mainPage/component/footer';
import WrappedSignIn from './signPage/signIn';


// const { Header, Content, Footer } = Layout;
// 특정 컴포넌트 내에 span은 24로 나눠짐
// status를 이용해 Topper를 생기게하고 사라지게 하는걸 결정할까 생각중
function App() {
  return (
    <Layout className="layout">
      <Topper />
      <Body />
      <Bottom />
    </Layout>
  );
}

export default App;
