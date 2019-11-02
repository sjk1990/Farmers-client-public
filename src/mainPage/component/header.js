import React from 'react';
import { Button, Layout, Typography, Col, Row, PageHeader } from 'antd';
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

const { Header } = Layout;
const { Title } = Typography;
const colStyle = { textAlign: 'center' };

/***********************************************CSS*************************************************************/

const PageHeaderStyle = { width: '70vw', margin: 'auto', marginTop: '1vh', borderRadius: '1.5vh'}

/***************************************************************************************************************/

function Topper() {
  return (
    <div className="header-wrap">
      <PageHeader
        style={PageHeaderStyle}
        ghost={false}
        title="생활농사"
        // onBack={() => window.history.back()}
        // subTitle="This is a subtitle"
        extra={[
          <Button key="3">HOME</Button>,
          <Button key="2">회원가입</Button>,
          <Button key="1" type="primary">
            로그인
          </Button>
        ]}
      ></PageHeader>
    </div>
    // <Header style={{ background: '#E0F8E0', height: "10vh"}}>
        //   <div className="logo" />
        //   <Row>
        //     <Col span={8} style={colStyle}>
        //       <Button type="primary">HOME</Button>
        //     </Col>
        //     <Col span={8} style={colStyle}>
        //       <Title>생활농사</Title>
        //     </Col>
        //     <Col span={8} style={colStyle}>
        //       <Button type="primary">로그아웃</Button>
        //     </Col>
        //   </Row>
        // </Header>
    );
  }

  export default Topper;