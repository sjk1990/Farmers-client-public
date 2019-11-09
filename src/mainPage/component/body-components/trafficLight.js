import React, { Component } from "react";
import { Typography, Divider } from 'antd';
import apiKey from "./apiKey"
import { thisTypeAnnotation } from "@babel/types";

/***********************************************image*******************************************************/
import greenLight from './greenLight.png'
import yellowLight from './yellowLight.png'
import redLight from './redLight.png'
/***********************************************************************************************************/

const { Title, Paragraph, Text } = Typography;

/***********************************************CSS*********************************************************/

const contentWapperStyle = { 
  background: '#E3F6CE',
  borderRadius: '1vw',
  padding: '0 50px',
  textAlign: 'left',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
};
const contentWapperStyle2 = { 
  background: '#F2F5A9',
  borderRadius: '1vw',
  padding: '0 50px',
  textAlign: 'left',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
};
const contentWapperStyle3 = { 
  background: '#FA5858',
  borderRadius: '1vw',
  padding: '0 50px',
  textAlign: 'left',
  height: '22vh',
  margin: 'auto',
  marginTop: '2vh',
  width: '70vw',
};
const imgStyle = {
  borderRadius: '1vh',
  height: '20vh',
  marginTop: '1vh',
  marginRight: '2vw',
  float: 'left',
};
/***********************************************************************************************************/

let content = 
{
  title : '',
  description : ''
}

const apiSource = "https:\/\/api.openweathermap.org/data/2.5/weather?";


class TrafficLight extends Component{
  constructor(props) {
    super(props);
    this.state = {
      weather: 1 
    };

    this.imageChanger = this.imageChanger.bind(this);
    // this.colorChanger = this.colorChanger.bind(this);
  }

componentDidMount()
{
  const that = this;
  let lat, lon, add;
  let url = "http://989e595a.ngrok.io/crop/"
  let getObj = 
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }
  navigator.geolocation.watchPosition(function(position) 
  {
      lat = position.coords.latitude.toFixed(4);
      lon = position.coords.longitude.toFixed(4);     
      add = apiSource + "lat=" + lat + "&lon=" + lon + apiKey;
      
      console.log('geolocation-lat : ' + lat);
      console.log('geolocation-lon : ' + lon);
      console.log('apiKey : ', add);

      fetch(add)
      .then(res => res.json())
      .then(res => 
      {        
        let curTemp = Math.round(res.main.temp - 273.15)
        return curTemp
      })
      .then(curTemp => 
      {
        console.log("현재온도 : ", url+curTemp)
        fetch(url+curTemp, getObj)
        .then(res => res.json())
        .then(res => {
          console.log("level :", res.level)
          that.setState({weather: res.level})
        })
      })
  })
  return true;
 }

imageChanger()
{
  if(this.state.weather === 1)
  {
    content.title = "안전";
    content.description = "당신의 작물이 최적의 온도에서 자라고 있습니다.";
    return greenLight
  }
  else if(this.state.weather === 2)
  {
    content.title = "주의";
    content.description = "작물이 자라기에 적합하지 않은 날씨입니다. 주의가 필요합니다.";
    return yellowLight
  }
  else if(this.state.weather === 3)
  {
    content.title = "위험";
    content.description = "당신의 작물에게 매우 부적절한 날씨입니다. 각별히 신경써주세요.";
    return redLight
  }
}

render()  
  {
    return (
      // 로그인 후
      <div className="content-wrapper" style={this.state.weather === 1 ? contentWapperStyle : this.state.weather === 2 ? contentWapperStyle2 : contentWapperStyle3}>
        <img
          src={this.imageChanger()}
          className="content-image"
          style={imgStyle}
        ></img>
        <div className="wrap-crop-signal">
          <strong className="crop-signal-title">{content.title}</strong>
          <p className="crop-signal-description">
            {content.description}
          </p>
        </div>
      </div>
    );
  }
}

export default TrafficLight;
