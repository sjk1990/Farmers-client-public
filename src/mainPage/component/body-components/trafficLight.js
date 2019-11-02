import React from 'react';
import { Typography, Divider } from 'antd';

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

function TrafficLight() {
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
    // 로그인 전
    // <Typography>
    //     <Title level={2}>신호등</Title>
    //     <Paragraph>
    //       In the process of internal desktop applications development, many different design specs and
    //       implementations would be involved, which might cause designers and developers difficulties and
    //       duplication and reduce the efficiency of development.
    //     </Paragraph>
    //     {/* <Divider /> */}
    //   </Typography>
  );
}

export default TrafficLight;
