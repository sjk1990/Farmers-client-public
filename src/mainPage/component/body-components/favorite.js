import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;
let imgStyle = { height : "20vh", marginTop : "1vh", marginRight : "2vw", float : "left"}
function Favorite(){
    return (
    // 로그인 후
   <div style ={{textAlign : "left"}}>
        <img src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        style ={imgStyle}></img>
        <div className = "wrap-description">
          <strong>감자</strong>
          <p>대충 감자에 대한 자세하고 친절한 설명</p>
        </div>

  </div>


    // 로그인 전
    // <Typography>
    //     <Title level={2}>인사말</Title>
    //     <Paragraph>
    //       In the process of internal desktop applications development, many different design specs and
    //       implementations would be involved, which might cause designers and developers difficulties and
    //       duplication and reduce the efficiency of development.
    //     </Paragraph>        
    //     {/* <Divider /> */}
    //   </Typography>     
  );
}

export default Favorite;
