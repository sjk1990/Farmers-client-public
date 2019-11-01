import React from 'react';
import { Layout, Select, Input } from 'antd';
import Favorite from '../component/body-components/favorite.js';
import Recommend from '../component/body-components/recommend.js';
import TrafficLight from '../component/body-components/trafficLight.js';
import SearchBox from '../component/body-components/searchBox.js';

// import Favorite from './body-favorite';
// 상대경로일 때 로딩이 안되는 부작용
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

const { Content } = Layout;
const contentDesign = {
  background: 'white',
  padding: '0 50px',
  textAlign: 'center',
  height: '22vh',
  margin : 'auto',
  marginTop: '2vh',
  width: '70vw'
};


function Body() {
  return (
          <Content style={{ padding: '0 50px', textAlign: 'center', height: "80vh", marginTop: "2vh"}}>
              <SearchBox />
            <Content style={contentDesign}>   
              <Favorite />
            </Content>
            <Content style={contentDesign}>
              <TrafficLight />              
            </Content>
            <Content style={contentDesign}>
              <Recommend />
            </Content>
          </Content>  
    );
  }
  
export default Body;
