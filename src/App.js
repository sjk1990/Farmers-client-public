import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";

import Body from "./mainPage/component/body";
import Bottom from "./mainPage/component/footer";
import BeforeLogin from "./mainPage/component/beforeLogin.js"

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Button, PageHeader } from "antd";
import WrappedSignIn from "./signPage/signIn";
import WrappedSignUp from "./signPage/signUp";

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
      signIn: false, // 다시 false로 가야한다.
      signUp: false,
      // isLogin: false
    };

    this.infoRegister = this.infoRegister.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
    this.tryLogout = this.tryLogout.bind(this);
    // this.getCrops = this.getCrops.bind(this)
  }

  //이미 회원정보 있을때
  infoRegister() {
    let url = "http://7c95ad4e.ngrok.io/user/signup"
    // let url = "http://localhost:5000/user/signup"
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
        "Content-Type": "application/json",
        "Cookie": "token=token"
      },
      method: "POST",
      body: JSON.stringify(newUser)
    }

    fetch(url, newInfo)
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
  tryLogin(e) {
    e.preventDefault();

    let url = "http://7c95ad4e.ngrok.io/user/signin";
    // let url = "http://localhost:5000/user/signin";
    let login_info = {
      "email": document.querySelector("#normal_login_email").value,
      "password": document.querySelector("#normal_login_password").value
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(login_info),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"      
    })
      .then(res => {       
        if (res.status === 200) {
          this.setState({ signIn: true });
          return alert('로그인되었습니다.');
        }
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
  tryLogout(e) {    
    let url = "http://7c95ad4e.ngrok.io/user/signout";
    // let url = "http://localhost:5000/user/signout";

    // let login_info = {
    //   "email": document.querySelector("#normal_login_email").value,
    //   "password": document.querySelector("#normal_login_password").value
    // };

    fetch(url, {
      method: "POST",    
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"      
    })
      .then(res => {       
        if (res.status === 200) {
          this.setState({signIn : false})
          alert('로그아웃 되었습니다.')    
        }  // 로그인 조건 만족?        
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  
  // signIn의 로그인 버튼에 기능을 걸어둔다.
  // 로그인 시 true인 state값(signIn: true)에 따라 실행되도록?
  // 로그인 화면으로 이동한 후 자동 요청
  // getCrops() {
    
  // }

  componentDidUpdate()
  {
    if(this.state.signIn)
    {
      console.log("페치실행")
      let url = "http://7c95ad4e.ngrok.io/crop/reco";
      // let url = "http://localhost:5000/crop/reco";

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
        , credentials: 'include'
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if(res.status === 200){
          console.log("200 는 : ", res)
        }  // 로그인 조건 만족?        
          // console.log("나는 농작물 정보를 받아온다:",res)
        })
        .catch(err => console.error(err));  
    }
  }

  
  render() {    
    let toggleLogin = !this.state.signIn ?
      // 버튼을 누르면 이동
      <Button key="1" type="primary">
        <Link to="/signIn">로그인</Link>
      </Button> :
      // this.state.signIn ?
      <Button onClick={this.tryLogout} key="1" type="danger">
        <Link to="/signIn">로그아웃</Link>
      </Button>
    
      console.log("로그인 진위여부 : ", this.state.signIn)

      // let logInOut = !this.state.signIn ?  
      // <Route path="/signIn" render={() =>          
      //   <WrappedSignIn func={this.tryLogin} signInBool={this.state.signIn} />} />  :
      // <Route path="/signIn" render={() => 
      //   <WrappedSignIn func={this.tryLogout} signInBool={this.state.signIn} />} />
    
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
                ]}
              ></PageHeader>
              <Switch>                            
                {this.state.signIn ? <Route exact path="/" render={() => <Body />} /> : <Route exact path="/" render={() => <BeforeLogin />} />}
                <Route path="/signIn" render={() => <WrappedSignIn login={this.tryLogin} logout={this.tryLogout} signInBool={this.state.signIn} />} />
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