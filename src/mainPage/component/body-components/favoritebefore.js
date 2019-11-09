import React, { Component } from 'react'


let imgStyle = {
    borderRadius: '1vw',
    height: '20vh',
    marginTop: '1vh',
    marginRight: '2vw',
    float: 'left'
};

class FavoriteBefore extends Component {
    render() {
        return (
            <div className="content-wrapper" style={{ textAlign: 'left' }}>
                <img
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    className="content-image"
                    style={imgStyle}
                ></img>
                <div className="wrap-crop-content">
                    <strong className="crop-name">감자</strong>
                    {/* <div className="crop-name">감자</div> */}
                    <p className="crop-description">
                        대충 감자에 대한 자세하고 친절한 설명
          </p>
                </div>
            </div>
        )
    }
}

export default FavoriteBefore
