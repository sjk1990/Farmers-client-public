import React from 'react';
// import ReactDOM from 'react-dom';
import { Typography, Form, Icon, Input, Button, Layout } from 'antd';
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
  constructor(props) {
    super(props)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {    
    // func가 props로 들어오는 것 확인
    console.log(this.props.func) 
    const { getFieldDecorator } = this.props.form;
    return (
    <div className = "layout-wrapper"style={layoutWrapperStyle}> 
      <Layout style={layoutStyle}>
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
              <Button onClick = {this.props.func} style={signinButtonStyle} type="primary" htmlType="submit" className="login-form-button">
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

