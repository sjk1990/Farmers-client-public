import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";
import Body from "./mainPage/component/body";
import Bottom from "./mainPage/component/footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, PageHeader } from "antd";
import WrappedSignIn from "./signPage/signIn";
import WrappedSignUp from "./signPage/signUp";
import { CoverageSummary } from "istanbul-lib-coverage";
import { sign } from "crypto";
const PageHeaderStyle = {
  width: "70vw",
  margin: "auto",
  marginTop: "1vh",
  borderRadius: "1.5vh"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false
    };

    this.infoRegister = this.infoRegister.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
  }
  // 이미 회원정보 있을때
  infoRegister() { }

  //회원정보 일치할때
  tryLogin() {
    let url = "http://localhost:5000/user/signin";
    // let url = "http://e218b6bc.ngrok.io/user/signin";
    let login_info = {
      "email": document.querySelector("#normal_login_email").value,
      "password": document.querySelector("#normal_login_password").value
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(login_info),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ signIn: true });
          return console.log('로그인되었습니다.');
        }
      })
      // .then(res => this.setState({ signIn: false }))
      .catch(err => console.error(err));
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
              <Route exact path="/" component={Body} />
              <Route
                path="/signIn"
                // component={WrappedSignIn} />
                render={() => (
                  <WrappedSignIn
                    signInBool={this.state.signIn}
                    func={this.tryLogin}
                  />
                )}
              />
              <Route
                path="/signUp"
                render={() => <WrappedSignUp func={this.infoRegister} />}
              />
            </Switch>
          </div>
          <Bottom />
        </Layout>
      </Router>
    );
  }
}
export default App;
