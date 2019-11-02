import React from 'react';
// import ReactDOM from 'react-dom';
import { Typography, Form, Icon, Input, Button, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

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
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Header style={{ padding: '10px', background: '#E0F8E0', height: "10vh" }}>
          <Title style={{ textAlign: 'center' }} level={1}>로그인</Title>
        </Header>

        <Content style={{ textAlign: 'center', margin: 'auto', width: '60vh', height: "80vh" }}>
          <p style={{ height: '20vh' }}></p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button style={{ marginRight: '50px' }} type="primary" htmlType="submit" className="login-form-button">
                로그인
              </Button>
              {/* <p style={{ margin: '50px' }}></p> */}
              <Button type="primary" htmlType="submit" className="SignUp-form-button">
                회원가입
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={{ textAlign: 'center', height: "10vh" }}>농 사 꾼 로 그 인 페 이 지</Footer>
      </Layout>
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