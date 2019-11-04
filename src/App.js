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
  infoRegister() {
    let url = 'http://localhost:8080/user/signup'
    let newUser ={ 
      "username" : "접니다",
      "email" : "문제@gmadsfil.com", 
      "password" : "12ki" , 
      "location" : "Seoul", 
      "category": "rice", 
      "term" : 2, 
      "difficulty" : 2, 
      "labor": 1 
     }
    let newInfo = {
      headers: 
      {
        // "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(newUser)
    }
    console.log('새 회원정보 : ', newUser)
    console.log('새 회원정보 : ', newInfo)

    fetch(url,newInfo)
    .then((res) => {
      if (res.status === 201) {
        res.json()
        .then(json => console.log(json));
      } else {
        console.error(res.statusText);
      }
    }).catch(err => console.error(err));
  }
  //회원정보 일치할때
  tryLogin(e) {
    
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
              <Route exact path="/" component={Body}/>} />
              <Route path="/signIn" render = {() => <WrappedSignIn func = {this.tryLogin}/>} />
              <Route path="/signUp" render={() => <WrappedSignUp func = {this.infoRegister}/>} />
            </Switch>
          </div>
          <Bottom />
        </Layout>
      </Router>
    );
  }
}
export default App;
