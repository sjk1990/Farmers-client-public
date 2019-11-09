import React from 'react';
import { Layout, Select, Input } from 'antd';
import agriculture from './agriculture.jpg'
import banner from './banner.png'
import lifeOnHands from './lifeOnHands.png'
import smargAgriculture from './smartAgriculture.png'
import smargAgriculture2 from './smartAgriculture2.png'

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
const firstcontentDesign = {
  background: 'white',
  borderRadius: '1vw',
  textAlign: 'center',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
  opacity: 0.7
};
const footerLeftContentDesign = {
  background: 'white',
  borderRadius: '1vw',
  padding: '0 50px',
  textAlign: 'center',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '34vw',
  float: "left"
}
const footerRightContentDesign = {
  background: 'white',
  borderRadius: '1vw',
  padding: '0 50px',
  textAlign: 'center',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '34vw',
  float: "right"
}
const bannerImg = {
  background: 'white',
  borderRadius: '1vw',  
  textAlign: 'center',
  height: '22vh',
  width: '70vw',
}
const firstContent = {
  padding: '0 50px',
  textAlign: 'center',
  height: '80vh',
  marginTop: '2vh',
};
const subTitle = {
  paddingTop : "1vh"
}

const lifeOnHandsStyle = {
  borderRadius: '1vw',
  height: '20vh',
  marginTop: '1vh',
  marginRight: '2vw',
  float: 'left'
};
const smartAgricultureStyle = {
  borderRadius: '1vw',
  height: '20vh',
  marginTop: '1vh',
  marginLeft: '1.5vw',
  float: 'right'
}
/***********************************************************************************************************/

function BeforeLogin() {
  return (
    //<SignIn />
    //<SignUp />
    <Content style={firstContent}>      
      <Content style={firstcontentDesign} >
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <img src={banner} style = {bannerImg}></img>
        </div>
     </div>
      </Content>
      <Content style={contentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
      <div className="wrap-crop-content">
        <img src={lifeOnHands} style = {lifeOnHandsStyle}></img>
        <h2 style ={subTitle}>농업의 대중화를 위하여</h2>
        <p>저희 농사꾼은 힘들고 멀게만 느껴졌던 농사에 대한 정보를 대중들에게 쉽게 알려주기 위한 웹 서비스입니다.</p> 
        <p>귀농·귀촌 농업인들, 주말농사를 하시는 분들, 처음으로 농사를 시작하시는 분들께 적합한 서비스입니다.</p>
        <p>너도 농사할 수 있어</p>
        </div>
     </div>
      </Content>
      <div style ={{margin: "auto", width: "70vw"}}>
        <Content style={footerLeftContentDesign}>
        <div className="content-wrapper" style={{ textAlign: 'left' }}>      
        <div className="wrap-crop-content">
          <img src = {smargAgriculture2} style = {smartAgricultureStyle}></img>
          <h2 style ={subTitle}>
            <strong>날씨정보에 기반한 <br></br>농작물 상태변화 표시</strong>  
          </h2>          
            <p>더 이상 일기예보를 직접 확인할 필요가 없습니다. 
              <br></br>
            관심작물을 등록하고 당일 작물의 상태를 체크하세요.</p>
          </div>
      </div>
      </Content>
      <Content style={footerRightContentDesign}>
      <div className="content-wrapper" style={{ textAlign: 'left' }}>      
        <div className="wrap-crop-content">
          <img src = {smargAgriculture} style = {smartAgricultureStyle}></img>
          <h2 style ={subTitle}><strong>현재 위치에 기반한 농작물 추천</strong></h2>                   
            <p>현재 사용자가 위치한 곳에 적합한 농작물을 추천받을 수 있습니다.</p>
          </div>
        </div>
      </Content>
    </div>
  </Content>
  );
}

export default BeforeLogin;
