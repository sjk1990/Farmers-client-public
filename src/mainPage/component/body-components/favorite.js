import React, { Component } from 'react';
import { Typography, Divider } from 'antd';
import FavoriteBefore from './favoritebefore';
import FavoriteAfter from './favoriteafter';

const { Title, Paragraph, Text } = Typography;

// let cropData = {
//   cropname: res[0].cropname
// }

/***********************************************CSS******************************************************/
let imgStyle = {
  borderRadius: '1vw',
  height: '20vh',
  marginRight: '2vw',
  float: 'left'
};
/********************************************************************************************************/

class Favorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cropinfo: []
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate: ", JSON.stringify(nextState));
  //   return true;
  // }

  componentDidMount() {
    // if (this.state.signIn) {
    console.log("페치실행")

    let url = "http://b86d19e2.ngrok.io/crop/reco";
    // let url = "http://localhost:5000/crop/reco";

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      , credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        let arr = [res[0]];
        this.setState({ cropinfo: arr })
        console.log(this.state.cropinfo)
        console.log('cropinfo::::', this.state.cropinfo)
      })
      .catch(err => console.error(err));
    // }
  }

  render() {
    return (
      // 로그인 후
      !this.state.cropinfo.length ? 
      <FavoriteBefore /> : 
      <div>
        <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="content-image" style = {imgStyle}></img>
        <div style ={{float: "right", width: "50vw"}}> 
          <FavoriteAfter val={this.state.cropinfo[0]} />
        </div>
      </div>      
    )
  }
}

export default Favorite;
