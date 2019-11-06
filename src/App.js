import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";
import Body from "./mainPage/component/body";
import Bottom from "./mainPage/component/footer";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Button, PageHeader } from "antd";
import WrappedSignIn from "./signPage/signIn";
import WrappedSignUp from "./signPage/signUp";
import { CoverageSummary } from "istanbul-lib-coverage";
import { sign } from "crypto";
import { animationFrameScheduler } from "rxjs";
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
      signUp: false,
      // isLogin: false
    };

    this.infoRegister = this.infoRegister.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
  }

  //이미 회원정보 있을때
  infoRegister() {
    let url = "http://4274e56d.ngrok.io/user/signup"
    let fakeURL = "http://localhost:8080/user/signup"
    let newUser = {
      "username": document.getElementById("register_username").value,
      "email": document.getElementById("register_email").value,
      "password": document.getElementById("register_password").value,
      "location": document.getElementById("register_location").value,
      "category": document.getElementById("register_category").value,
      "term": document.getElementById("register_term").value, // 숫자로만 입력
      "difficulty": document.getElementById("register_difficulty").value, // 숫자로만 입력
      "labor": document.getElementById("register_labor").value // 숫자로만 입력
    }
    let newInfo = {
      headers:
      {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(newUser)
    }

    fetch(fakeURL, newInfo)
      .then((res) => {
        if (res.status === 201) {
          this.setState({ signUp: true })
        } else {
          console.error(res.statusText);
        }
      })
      .then(res => {
        this.setState({ signUp: false })
      })
      .catch(err => console.error(err));
  }

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
          return alert('로그인되었습니다.');
        }
      })
      // .then(res => this.setState({ signIn: false }))
      .catch(err => console.error(err));
  }

  //로그인 되면 바로 렌더링 될 수 있게
  //로그인 시 true인 state값(signIn: true)에 따라 실행되도록?
  getCrops() {
    let url = "http://localhost:5000/crop/reco";
    // let url = "http://e218b6bc.ngrok.io/crop/reco";
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (this.state.signIn && (res.status === 200)) { // 로그인 조건 만족?
        return res.json();
      }
    })
      // .then( // 렌더링 방식 결정
      //   callback? body-recommend-ptag 안에 렌더링 해 준다.
      //   body-recommend도 signIn 의 state에 따라 렌더링 되도록.
      //   서버에서 배열속에 정보를 담아 리턴해줌)
      .catch(err => console.error(err));
  }

  render() {
    let toggleLogin = !this.state.signIn ?
      <Button key="1" type="primary"><Link to="/signIn">로그인</Link></Button> :
      // this.state.signIn ?
      <Button onClick={() => this.setState({ signIn: false })} key="1" type="danger"><Link to="/signIn">로그아웃</Link></Button>
    // : <Button key="1" type="primary"><Link to="/signIn">로그인</Link></Button>
    // if (this.state.isLogin === true) {
    //   return (<Redirect to="/signIn" from="/"></Redirect>)
    // }
    return (
      <Router>
        <Layout className="layout">
          <div className="header-wrap">
            <PageHeader style={PageHeaderStyle} ghost={false} title="생활농사" onBack={() => window.history.back()}
              extra={[
                <Button key="3">
                  <Link to="/">HOME</Link>
                </Button>,
                <Button key="2">
                  <Link to="/signUp">회원가입</Link>
                </Button>,
                toggleLogin
                // <Button key="1" type="primary">
                //   <Link to="/signIn">로그인</Link>
                // </Button>
              ]}
            ></PageHeader>
            <Switch>
              {/* <Route exact path="/" component={Body} /> */}
              <Route exact path="/" render={() => <Body />} />
              <Route path="/signIn" render={() => <WrappedSignIn func={this.tryLogin} signInBool={this.state.signIn} />} />
              <Route path="/signUp" render={() => <WrappedSignUp func={this.infoRegister} signUpBool={this.state.signUp} />} />
            </Switch>
          </div>
          <Bottom />
        </Layout>
      </Router>
    );
  }
}

export default App;
