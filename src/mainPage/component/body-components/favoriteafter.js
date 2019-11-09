import React, { Component } from 'react'
import { Descriptions } from "antd";

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
        <div style = {{marginTop: "1.5vh"}}>
            <Descriptions bordered title="작물정보" size="small"> 
                <Descriptions.Item label="작물명">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="분류">Prepaid</Descriptions.Item>
                <Descriptions.Item label="경작위치">18:00:00</Descriptions.Item>
                <Descriptions.Item label="토양산성도">$80.00</Descriptions.Item>
                <Descriptions.Item label="적정온도">$20.00</Descriptions.Item>
                <Descriptions.Item label="생육기간">$60.00</Descriptions.Item>
                <Descriptions.Item label="업무강도">$20.00</Descriptions.Item>
                <Descriptions.Item label="경작난이도">$60.00</Descriptions.Item>
                <Descriptions.Item label="기타사항">$60.00</Descriptions.Item>
            </Descriptions>
        </div>

            // <div className="content-wrapper" style={{ textAlign: 'left' }}>
            //     <img
            //         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            //         className="content-image"
            //         style={imgStyle}
            //     ></img>
            //     <div>
            //         <strong className="crop-name">작물 이름 :{this.props.val.cropname}</strong>
            //     </div>
            //     <div>분류 : {this.props.val.category}</div>
            //     <span>경작 위치 :{this.props.val.location}</span><span>토양 산성도 :{this.props.val.maxhp}</span>
            //     <span>적정 온도 :{this.props.val.maxtemp}</span><span>생육 기간 :{this.props.val.term}</span>
            //     <span>노동 강도 :{this.props.val.labor}</span><span>경작 난이도 :{this.props.val.difficulty}</span>
            // </div>
        )
    }
}

export default FavoriteAfter
