import React from 'react';
// import ReactDOM from 'react-dom';
import { Typography, Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
/***********************************************CSS*************************************************************/
const layoutWrapperStyle = {height: "83vh",background: "f0f2f5"}
const layoutStyle = { background: 'white', borderRadius: '1.5vh',margin: 'auto', marginTop: '20vh', width: "40vw", height: "50vh", paddingTop: "6vh"}
const headerTitleStyle = { textAlign: 'center'};
const contentStyle = { textAlign: 'center', margin: 'auto', width: '60vh', height: "80vh" };
const inputStyle = { color: 'rgba(0,0,0,.25)', width : '20vw'};
const signinButtonStyle = { marginRight: '1vw', width:"8vw", height: "4vh"};
const signupButtonStyle = { marginLeft: '1vw', width:"8vw", height: "4vh", };
const footerStyle = { textAlign: 'center', height: "10vh", textAlign: 'center'};
/***************************************************************************************************************/

class SignIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    // 헤더 삭제했는데 복구하자
    // <Header style={{ padding: '10px', background: '#E0F8E0', height: "10vh" }}>
    //   <Title style={{ textAlign: 'center' }} level={1}>로그인</Title>
    // </Header>
    const { getFieldDecorator } = this.props.form;
    return (
    <div className = "layout-wrapper"style={layoutWrapperStyle}> 
      <Layout style={layoutStyle}>
        {/* <Header style={{ padding: '10px', background: '#E0F8E0', height: "10vh" }}>
          <Title style={{ textAlign: 'center' }} level={1}>회원가입</Title>
        </Header> */}
        <Content style={contentStyle}>
          <Title style={headerTitleStyle} level={1}>로그인</Title>
          <Form onSubmit={this.handleSubmit} className="login-form" >
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="Username"
                  style = {inputStyle}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock"/>}
                  type="password"
                  placeholder="Password"
                  style = {inputStyle}
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button style={signinButtonStyle} type="primary" htmlType="submit" className="login-form-button">
                로그인
              </Button>
              {/* <p style={{ margin: '50px' }}></p> */}
              <Button style ={signupButtonStyle} type="danger" htmlType="submit" className="SignUp-form-button">
                회원가입
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={footerStyle}></Footer>
      </Layout>
    </div>
    );
  }
}

const WrappedSignIn = Form.create({ name: 'normal_login' })(SignIn);

// ReactDOM.render(<WrappedSignIn />, mountNode);

export default WrappedSignIn;

// // import { BrowserRouter as Route, Link } from 'react-router-dom';
// import React from 'react';
// import { Typography, Button, Input, Col, Row } from 'antd';
// import { Layout } from 'antd';
// const { Header, Footer, Content } = Layout;
// const { Title } = Typography;

// const SignIn = () => {
//     return (
//         <Layout>
//             <Header style={{ background: '#E0F8E0', height: "10vh"}}>
//             <Title style={{ textAlign: 'center' }} level={1}>로그인</Title>
//             </Header>

//             <Content style={{ padding: '0 50px', textAlign: 'center', height: "80vh", margin: '100px'}}>
//                 <Row gutter={8}>
//                 <Col span={24} offset={0} style={{ textAlign: 'center', margin: '30px auto' }}>
//                 이메일: <Input placeholder="input e-mail" style={{ width: 400 }} />
//                 </Col>
//                 <Col span={24} style={{ textAlign: 'center', margin: '10px' }} >
//                 비밀번호: <Input.Password placeholder="input password" style={{ width: 400 }} />
//                 </Col>
//                 <Button span={4} style={{ textAlign: 'center', height: '6vh', margin: '100px auto'}} type='primary'>
//             로그인 {/* <Button style={{height: '10vh'}} type='primary' block>로그인</Button> */}
//             </Button>
//             </Row>
//             </Content>

//       <Footer style={{ textAlign: 'center', height: "10vh" }}>농 사 꾼 로 그 인 페 이 지</Footer>
//         </Layout>
//     )
// };

//  #components-form-demo-normal-login .login-form {
//     max-width: 300px;
//   }
//   #components-form-demo-normal-login .login-form-forgot {
//     float: right;
//   }
//   #components-form-demo-normal-login .login-form-button {
//     width: 100%;
//   }

// export default SignIn;

// import React from 'react';
// import { Button } from 'antd';
// // 테스트용 주석
// function App() {
//   return (
//     <div className="App">
//       <Button type="primary">I am Button</Button>
//     </div>
//   );
// }

// export default App;
