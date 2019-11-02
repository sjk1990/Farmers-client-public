import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

/***********************************************CSS******************************************************/
let imgStyle = {
  borderRadius: '1vw',
  height: '20vh',
  marginTop: '1vh',
  marginRight: '2vw',
  float: 'left'
};
/********************************************************************************************************/
function Favorite() {
  return (
    // 로그인 후
    <div className="content-wrapper" style={{ textAlign: 'left' }}>
      <img
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        className="content-image"
        style={imgStyle}
      ></img>
      <div className="wrap-crop-content">
        <strong className="crop-name">감자</strong>
        <p className="crop-description">
          대충 감자에 대한 자세하고 친절한 설명
        </p>
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
