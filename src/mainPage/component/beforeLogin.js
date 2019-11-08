import React from 'react';
import { Layout, Select, Input } from 'antd';
// import SignIn from '../../signPage/signIn.js';
// import SignUp from '../../signPage/signUp.js';

// 로그인 이전에

const { Content } = Layout;

/***********************************************CSS*********************************************************/
const contentDesign = {
  background: 'white',
  borderRadius: '1vw',
  padding: '0 50px',
  textAlign: 'center',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
};
const firstContent = {
  padding: '0 50px',
  textAlign: 'center',
  height: '80vh',
  marginTop: '2vh',
};
const subTitle = {
  paddingTop : "1vh"
}
/***********************************************************************************************************/

function BeforeLogin() {
  return (
    //<SignIn />
    //<SignUp />
    <Content style={firstContent}>      
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <h2 style ={subTitle}>농업의 대중화를 위하여</h2>
        <p>작물 좀 길러보실텨?</p>
        </div>
     </div>
      </Content>
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <h2 style ={subTitle}>농업의 대중화를 위하여</h2>
        <p>작물 좀 길러보실텨?</p>
        </div>
     </div>
      </Content>
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <h2 style ={subTitle}>농업의 대중화를 위하여</h2>
        <p>작물 좀 길러보실텨?</p>
        </div>
     </div>
      </Content>
    </Content>
  );
}

export default BeforeLogin;
