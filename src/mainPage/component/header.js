import React from 'react';
import { Button, PageHeader } from 'antd';
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import WrappedSignIn from '../../signPage/signIn';
import WrappedSignUp from '../../signPage/signUp';
import Homepage from '../../signPage/router-home';

/***********************************************CSS*************************************************************/

const PageHeaderStyle = { width: '70vw', margin: 'auto', marginTop: '1vh', borderRadius: '1.5vh'}

/***************************************************************************************************************/

function Topper() {
  return (
  <Router>
    <div className="header-wrap">
      <PageHeader
        style={PageHeaderStyle}
        ghost={false}
        title="생활농사"
        // onBack={() => window.history.back()}
        // subTitle="This is a subtitle"
        extra={[
          <Button key="3">
              <Link to="/homepage">HOME</Link>
            </Button>,
            <Button key="2">
              <Link to="/signUp">회원가입</Link>
            </Button>,
            <Button key="1" type="primary">
              <Link to="/signIn">로그인</Link>
            </Button>
        ]}
      ></PageHeader>
        <Switch>
          <Route path="/signIn" component={WrappedSignIn} />
          <Route path="/signUp" component={WrappedSignUp} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
    </div>
  </Router>
    );
  }

export default Topper;
