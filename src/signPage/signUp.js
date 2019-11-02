import React from 'react';
import { Typography, Form, Input, Row, Col, Button, AutoComplete, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const AutoCompleteOption = AutoComplete.Option;
/***********************************************CSS*************************************************************/
const headerStyle = { background: 'none', textAlign: 'center', margin: 'auto', width: '60vh', height: "5vh", paddingTop: "3vh" }
const titleStyle = { textAlign: 'center' }
const contentStyle = { textAlign: 'center', margin: 'auto', width: '60vh', height: "80vh" }
const pTagStyle = { height: '2vh' }
const footerStyle = { textAlign: 'center', height: "10vh" }
/***************************************************************************************************************/

class SignUp extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                // 입력칸 위치조정
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },

                sm: { span: 16 }

            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    // 버튼위치조정
                    span: 8,
                    offset: 8,
                },
            },
        };

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Layout style={{width: '40vw', height: '80vh', margin: 'auto', marginTop: '3vh', borderRadius: '1.5vh'}}>
                <Header style={headerStyle}>
                    <Title style={titleStyle} level={3}>회원가입</Title>
                </Header>
                <Content style={contentStyle}>
                    <p style={pTagStyle}></p>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="username">
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        type: 'username',
                                        message: 'The input is not valid username!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="email">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid email!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>

                        <Form.Item label="location">
                            {getFieldDecorator('location', {
                                rules: [
                                    {
                                        type: 'location',
                                        message: 'The input is not valid location!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your location!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="category">
                            {getFieldDecorator('category', {
                                rules: [
                                    {
                                        type: 'category',
                                        message: 'The input is not valid category!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your category!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="term">
                            {getFieldDecorator('term', {
                                rules: [
                                    {
                                        type: 'term',
                                        message: 'The input is not valid term!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your term!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="difficulty">
                            {getFieldDecorator('difficulty', {
                                rules: [
                                    {
                                        type: 'difficulty',
                                        message: 'The input is not valid difficulty!',
                                    },
                                    {
                                        required: false,
                                        message: 'Please input your difficulty!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="labor">
                            {getFieldDecorator('labor', {
                                rules: [
                                    {
                                        type: 'labor',
                                        message: 'The input is not valid labor!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your labor!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                회원가입
                    </Button>
                        </Form.Item>
                    </Form>
                </Content>
                <Footer style={footerStyle}></Footer>
            </Layout>
        );
    }
}

const WrappedSignUp = Form.create({ name: 'register' })(SignUp);

//   ReactDOM.render(<WrappedSignUp />, mountNode);

export default WrappedSignUp;