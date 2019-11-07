import React from 'react';
import { Layout, Select, Input } from 'antd';
import SignIn from '../../signPage/signIn.js';
import SignUp from '../../signPage/signUp.js';

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
/***********************************************************************************************************/

function BeforeLogin() {
  return (
    //<SignIn />
    //<SignUp />
    <Content style={firstContent}>      
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <strong className="crop-name">인사말</strong>
         <p className="crop-description">
            안녕하세요 여러분
         </p>
        </div>
     </div>
      </Content>
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <strong className="crop-name">greeting</strong>
         <p className="crop-description">
            Hello Agriculture
         </p>
        </div>
     </div>
      </Content>
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <strong className="crop-name">Insa</strong>
         <p className="crop-description">
            nihao
         </p>
        </div>
     </div>
      </Content>
    </Content>
  );
}

export default BeforeLogin;
