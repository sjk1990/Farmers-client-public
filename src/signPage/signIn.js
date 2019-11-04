import React from 'react';
// import ReactDOM from 'react-dom';
import { Typography, Form, Icon, Input, Button, Layout } from 'antd';
// import WrappedSignUp from '../signPage/signUp';
import { BrowserRouter as Router } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
/***********************************************CSS*************************************************************/
const layoutWrapperStyle = { height: "83vh", background: "f0f2f5" }
const layoutStyle = { background: 'white', borderRadius: '1.5vh', margin: 'auto', marginTop: '20vh', width: "40vw", height: "50vh", paddingTop: "6vh" }
const headerTitleStyle = { textAlign: 'center' };
const contentStyle = { textAlign: 'center', margin: 'auto', width: '60vh', height: "80vh" };
const inputStyle = { color: 'rgba(0,0,0,.25)', width: '20vw' };
const signinButtonStyle = { marginRight: '1vw', width: "8vw", height: "4vh" };
const signupButtonStyle = { marginLeft: '1vw', width: "8vw", height: "4vh", };
const footerStyle = { textAlign: 'center', height: "10vh", textAlign: 'center' };
/***************************************************************************************************************/

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: null,
      email: "",
      pw: "",
      isLogin: null
    };
  }

  //이메일 입력창 관리
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  //패스워드 입력창 관리
  handlePW = e => {
    this.setState({
      pw: e.target.value
    });
  };

  //서버로 데이터 전송
  handleSubmit = e => {
    e.preventDefault();

    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch("http://localhost:3001/memo", login_info)
      .then(res => {
        return res.json();
      })
      .then(json => {
        //json형식 {idx: 8, nickname: "noh", email: "noh@gmail.com", success: true}
        if (json.success === true) {
          alert("로그인되었습니다");
          // 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
          window.localStorage.setItem('userInfo', JSON.stringify(json))
          //스테이트에 유저정보를 저장한다.
          this.setState({
            idx: json.idx,
            email: json.email,
            nickname: json.nickname,
            isLogin: json.success
          });
          this.props.history.push("/")
        } else {
          alert("아이디 혹은 비밀번호를 확인하세요");
        }
      });
  };

  render() {    
    // func가 props로 들어오는 것 확인
    console.log(this.props.func) 
    const { getFieldDecorator } = this.props.form;
    return (
      <Router>
        <div className="layout-wrapper" style={layoutWrapperStyle}>
          <Layout style={layoutStyle}>
            {/* <Header style={{ padding: '10px', background: '#E0F8E0', height: "10vh" }}>
          <Title style={{ textAlign: 'center' }} level={1}>회원가입</Title>
        </Header> */}
            <Content style={contentStyle}>
              <Title style={headerTitleStyle} level={1}>로그인</Title>
              <Form onSubmit={this.handleSubmit} className="login-form" >
                {/* 이메일 인풋창 */}
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      value={this.state.email}
                      onChange={this.handleEmail}
                      prefix={<Icon type="user" />}
                      placeholder="이메일을 입력하세요"
                      style={inputStyle}
                    />,
                  )}
                </Form.Item>
                {/* 비밀번호 인풋창 */}
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      value={this.state.password}
                      onChange={this.handlePW}
                      prefix={<Icon type="lock" />}
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      style={inputStyle}
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button style={signinButtonStyle} type="primary" htmlType="submit" className="login-form-button">
                    로그인
              </Button>
                  {/* <p style={{ margin: '50px' }}></p> */}
                  <Button onClick={() => this.props.history.push("/signUp")}
                    // 히스토리 prop을 이용해서 페이지 전환
                    style={signupButtonStyle} type="danger" htmlType="submit" className="SignUp-form-button">
                    회원가입
                </Button>
                </Form.Item>
              </Form>
            </Content>
            <Footer style={footerStyle}></Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

const WrappedSignIn = Form.create({ name: 'normal_login' })(SignIn);

// ReactDOM.render(<WrappedSignIn />, mountNode);

export default WrappedSignIn;

