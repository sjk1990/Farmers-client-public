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
                <Descriptions.Item label="작물명">{this.props.val.cropname}</Descriptions.Item>
                <Descriptions.Item label="분류">{this.props.val.category}</Descriptions.Item>
                <Descriptions.Item label="경작위치">{this.props.val.location}</Descriptions.Item>
                <Descriptions.Item label="토양산성도">{this.props.val.maxhp}</Descriptions.Item>
                <Descriptions.Item label="적정온도">{this.props.val.maxtemp}</Descriptions.Item>
                <Descriptions.Item label="생육기간">{this.props.val.term}</Descriptions.Item>
                <Descriptions.Item label="업무강도">{this.props.val.labor}</Descriptions.Item>
                <Descriptions.Item label="경작난이도">{this.props.val.difficulty}</Descriptions.Item>
                <Descriptions.Item label="기타사항"></Descriptions.Item>
            </Descriptions>
        </div>
        )
    }
}

export default FavoriteAfter
