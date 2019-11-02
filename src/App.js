import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import Body from './mainPage/component/body';
import Bottom from './mainPage/component/footer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, PageHeader } from 'antd';
import WrappedSignIn from './signPage/signIn';
import WrappedSignUp from './signPage/signUp';
const PageHeaderStyle = { width: '70vw', margin: 'auto', marginTop: '1vh', borderRadius: '1.5vh' }

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <div className="header-wrap">
            <PageHeader
              style={PageHeaderStyle}
              ghost={false}
              title="생활농사"
              // onBack={() => window.history.back()}
              // subTitle="This is a subtitle"
              extra={[
                <Button key="3">
                  <Link to="/">HOME</Link>
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
              <Route path="/" component={Body} />
            </Switch>
          </div>
          <Bottom />
        </Layout>
      </Router>
    );
  }
}
export default App;
