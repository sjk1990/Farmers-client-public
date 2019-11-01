import React from 'react';
import { Layout } from 'antd';
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

const { Footer } = Layout;

function Bottom() {
    return (
      <Footer style={{ textAlign: 'center', height: "10vh" }}>
        농사꾼 © Established at 2019
      </Footer> 
    );
  }

export default Bottom;
