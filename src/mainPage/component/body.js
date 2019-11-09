import React, { Component } from 'react';
import { Layout, Select, Input } from 'antd';
import Favorite from './body-components/favorite.js';
import Recommend from '../component/body-components/recommend.js';
import TrafficLight from '../component/body-components/trafficLight.js';
import SearchBox from '../component/body-components/searchBox.js';
// import SerchResult from '../component/body-components/afterSearch';


// import Favorite from './body-favorite';
// 상대경로일 때 로딩이 안되는 부작용
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

const { Content } = Layout;

/***********************************************CSS*********************************************************/
const contentDesign = {
  background: 'white',
  borderRadius: '1vw',
  padding: '0',
  textAlign: 'center',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
};
const favoriteDesign = {
  background: 'white',
  borderRadius: '1vw',
  padding: '0',
  textAlign: 'center',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
  padding: '0.5vw 2vw 0.5vw 2vw'
}
const firstContent = {
  padding: '0 50px',
  textAlign: 'center',
  height: '80vh',
  marginTop: '2vh',
  
};
/***********************************************************************************************************/
class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false,
      deliver: []
    }
    this.searched = this.searched.bind(this)
    this.deliverCrop = this.deliverCrop.bind(this)
  }

  searched() {
    this.setState({ search: true })
  }

  deliverCrop(data) {
    this.setState({ deliver: data })
  }

  render() {
    console.log(this.state)
    return (
      // this.state ?
      //   <SerchResult val={this.state.deliver[0]} /> :
        <Content style={firstContent}>
          <SearchBox func={this.searched} func2={this.deliverCrop} />
          <Content style={favoriteDesign}>
            <Favorite />
          </Content>
          <Content style={contentDesign}>
            <TrafficLight />
          </Content>
          <Content style={contentDesign}>
            <Recommend />
          </Content>
        </Content>
    )
  }
}

export default Body;
