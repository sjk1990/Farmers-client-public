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
  marginTop: '1vh',
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
        // console.log('cropinfo::::', this.state.cropinfo)

        // console.log(res)
        // if (res.status === 200) { ==> 작동 X.
        // console.log("200 는 : ", res[0])
        // document.querySelector('strong.crop-name').innerHTML = `작물명 : ${res[0].cropname}`;
        // document.querySelector('p.crop-description').innerHTML =
        //   `주요 경작 위치 : ${res[0].location}<br> 분류 : ${res[0].category}<br>
        //     ※재배 정보※<br> 
        //     토양 산성도 : ${res[0].maxph} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 경작 난이도 : ${res[0].difficulty}<br>
        //     적정 온도 : ${res[0].maxtemp} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 노동 강도 : ${res[0].labor}<br>
        //     생육기간 : ${res[0].term} &nbsp;&nbsp;&nbsp;&nbsp; 경작 방법 : url 첨부?`;
      })
      .catch(err => console.error(err));
    // }
  }

  render() {
    return (
      // 로그인 후
      this.state.cropinfo.length ?
        <FavoriteAfter val={this.state.cropinfo[0]} /> :
        <FavoriteBefore />
    )
  }
}
// function Favorite() {
//   return (
//     // 로그인 후
//     <div className="content-wrapper" style={{ textAlign: 'left' }}>
//       <img
//         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//         className="content-image"
//         style={imgStyle}
//       ></img>
//       <div className="wrap-crop-content">
//         <strong className="crop-name">{imgStyle.borderRadius}</strong>
//         {/* <div className="crop-name">감자</div> */}
//         <p className="crop-description">
//           대충 감자에 대한 자세하고 친절한 설명
//         </p>
//       </div>
//     </div>

//     // 로그인 전
//     // <Typography>
//     //     <Title level={2}>인사말</Title>
//     //     <Paragraph>
//     //       In the process of internal desktop applications development, many different design specs and
//     //       implementations would be involved, which might cause designers and developers difficulties and
//     //       duplication and reduce the efficiency of development.
//     //     </Paragraph>
//     //     {/* <Divider /> */}
//     //   </Typography>
//   );
// }

export default Favorite;
