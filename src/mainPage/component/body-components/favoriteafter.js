import React, { Component } from 'react'

let imgStyle = {
    borderRadius: '1vw',
    height: '20vh',
    marginTop: '1vh',
    marginRight: '2vw',
    float: 'left'
};

class FavoriteAfter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-wrapper" style={{ textAlign: 'left' }}>
                <img
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    className="content-image"
                    style={imgStyle}
                ></img>
                <div>{console.log(this.props.val)}
                    <strong className="crop-name">작물 이름 :{this.props.val.cropname}</strong>
                </div>
                <div>분류 : {this.props.val.category}</div>
                <span>경작 위치 :{this.props.val.location}</span><span>토양 산성도 :{this.props.val.maxhp}</span>
                <span>적정 온도 :{this.props.val.maxtemp}</span><span>생육 기간 :{this.props.val.term}</span>
                <span>노동 강도 :{this.props.val.labor}</span><span>경작 난이도 :{this.props.val.difficulty}</span>
            </div>
        )
    }
}

export default FavoriteAfter
