import React, { Component } from "react";
import { Typography, Divider } from 'antd';
import apiKey from "./apiKey"

const { Title, Paragraph, Text } = Typography;
/***********************************************CSS*********************************************************/
const contentWapperStyle = { textAlign: 'left'};
const imgStyle = {
  borderRadius: '1vh',
  height: '20vh',
  marginTop: '1vh',
  marginRight: '2vw',
  float: 'left'
};
/***********************************************************************************************************/

const apiSource = "https:\/\/api.openweathermap.org/data/2.5/weather?";


class TrafficLight extends Component{
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    // this.useWeatherAPI = this.useWeatherAPI.bind(this)
  }

 getLocation(){
  let lat, lon, add;
  navigator.geolocation.watchPosition(function(position) {
      lat = position.coords.latitude.toFixed(4);
      lon = position.coords.longitude.toFixed(4);     
      add = apiSource + "lat=" + lat + "&lon=" + lon + apiKey;
      console.log('geolocation-lat : ' + lat);
      console.log('geolocation-lon : ' + lon);
      console.log('apiKey : ', add);

      fetch(add).then(res => res.json())
      .then(json => console.log(json))}
    )
    //obj.main.temp - 273.15).toFixed(0) + '°C'
  };

 componentDidMount(){
  this.getLocation()
 }

  render(){
    // setInterval(this.useWeatherAPI, 5000);
    return (
      // 로그인 후
      <div className="content-wrapper" style={contentWapperStyle}>
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="content-image"
          style={imgStyle}
        ></img>
        <div className="wrap-crop-signal">
          <strong className="crop-signal-title">신호등</strong>
          <p className="crop-signal-description">
            대충 선호작물에 대한 자세하고 친절한 설명
          </p>
        </div>
      </div>
    );
  }
}

export default TrafficLight;
