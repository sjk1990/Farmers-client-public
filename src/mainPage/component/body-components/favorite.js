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

  componentDidMount() {
    // if (this.state.signIn) {
    console.log("페치실행")
    // let url = "http://2560c8d9.ngrok.io/crop/reco";
    let url = "http://b86d19e2.ngrok.io/crop/reco";

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      , credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {

        let arr = [res[0]];
        this.setState({ cropinfo: arr })
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
