import React from 'react';
import { Layout } from 'antd';

// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

const { Footer } = Layout;

function Bottom() {
    return (
      <Footer>
        <div style = {{textAlign: "center"}}>
          농사꾼 © Established at 2019
        </div>
      </Footer> 
    );
  }

export default Bottom;
