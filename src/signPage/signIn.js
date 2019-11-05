import React from 'react';
// import ReactDOM from 'react-dom';
import { Typography, Form, Icon, Input, Button, Layout } from 'antd';
// import WrappedSignUp from '../signPage/signUp';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
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
      email: '',
      pw: ''
    }
  }

  //이메일 입력창 관리
  // handleEmail = (email) => {
  //   this.setState({
  //     email: email
  //   });
  // };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  //패스워드 입력창 관리
  handlePW = password => {
    this.setState({
      pw: password
    });
  };

  //서버로 데이터 전송
  handleSubmit = e => {
    e.preventDefault();
    console.log("후 ::", this.state);
    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "text/plain"
      }
    };

    return fetch("http://localhost:5000", login_info)
      .then(res => {
        console.log("res", res)
        return res.json();
        // console.log(res);
      })
  };
  
  render() {
    console.log(this.props.SignIn)
    if(this.props.signInBool === true){
      return (<Redirect from="signIn" to="/"/>)
    }
    // func가 props로 들어오는 것 확인
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
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      value={this.state.email}
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
                      prefix={<Icon type="lock" />}
                      placeholder="비밀번호를 입력하세요"
                      style={inputStyle}
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button onClick={this.props.func} style={signinButtonStyle} type="primary" htmlType="submit" className="login-form-button">
                    로그인
                  </Button>
                  <Button onClick={this.props.func}
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

