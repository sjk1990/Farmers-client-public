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
  constructor(props) {
    super(props)
    this.state = {
      signIn: false,
      signUp: false
    }

    this.infoRegister = this.infoRegister.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
  }
  //이미 회원정보 있을때
  infoRegister(e) {
    !this.state.signUp
      ? alert('이미 존재하는 회원입니다.')
      : this.setState({ signUp: true });
  }
  //회원정보 일치할때
  tryLogin(e) {
    console.log(document.getElementsByClassName('ant-input')[0].value) // 아이디 입력창의 값
    console.log(document.getElementsByClassName('ant-input')[1].value) // 비밀번호 입력창의 값
    !this.state.signIn
      ? this.setState({ signIn: true })
      : alert('존재하지 않는 회원입니다.');
    console.log("로그인 상태값 : ",this.state.signIn) // 비밀번호 입력창의 값
  }

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
              {/* <Route path="/signIn" component={() => <WrappedSignIn  func ={this.tryLogin}/>} /> */}
              <Route path="/signIn" render = {props => <WrappedSignIn func = {this.tryLogin}/>} />
              <Route path="/signUp" component={WrappedSignUp} />
            </Switch>
          </div>
          <Bottom />
        </Layout>
      </Router>
    );
  }
}
export default App;
