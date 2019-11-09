import React, { Component } from 'react';
import { Descriptions } from "antd";

import potato from '../body-components/image/potato.png';
import tomato from '../body-components/image/tomato.png';
import sweet from '../body-components/image/sweet.jpg';
import corn from '../body-components/image/corn.jpg';
import cabage from '../body-components/image/cabage.jpg';


class SerchResult extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const cropname = this.props.val[0]
        let keyword = '';
        if (this.props.val[0]) {
            if (this.props.val[0].cropname === '감자') {
                keyword = potato
            }
            if (this.props.val[0].cropname === '토마토') {
                keyword = tomato
            }
            if (this.props.val[0].cropname === '고구마') {
                keyword = sweet
            }
            if (this.props.val[0].cropname === '옥수수') {
                keyword = corn
            }
            if (this.props.val[0].cropname === '배추') {
                keyword = cabage
            }

        
            return (
                <div style = {{marginTop: "1.5vh"}}>
                    <Descriptions bordered title="작물정보" size="small"> 
                        <Descriptions.Item label="작물명">{this.props.val[0].cropname}</Descriptions.Item>
                        <Descriptions.Item label="분류">{this.props.val[0].category}</Descriptions.Item>
                        <Descriptions.Item label="경작위치">{this.props.val[0].location}</Descriptions.Item>
                        <Descriptions.Item label="토양산성도">{this.props.val[0].maxhp}</Descriptions.Item>
                        <Descriptions.Item label="적정온도">{this.props.val[0].maxtemp}</Descriptions.Item>
                        <Descriptions.Item label="생육기간">{this.props.val[0].term}</Descriptions.Item>
                        <Descriptions.Item label="업무강도">{this.props.val[0].labor}</Descriptions.Item>
                        <Descriptions.Item label="경작난이도">{this.props.val[0].difficulty}</Descriptions.Item>
                        <Descriptions.Item label="기타사항"></Descriptions.Item>
                    </Descriptions>
                </div>
                // <div>
                //     {/* {'aa', console.log(this.props.val[0]['cropname'])} */}
                //     {/* {console.log('된다!')} */}
                //     <div>작물 이름 :{this.props.val[0].cropname}</div>
                //     <div>분류 : {this.props.val[0].category}</div>
                //     <span>경작 위치 :{this.props.val[0].location}</span><span>토양 산성도 :{this.props.val[0].maxhp}</span>
                //     <span>적정 온도 :{this.props.val[0].maxtemp}</span><span>생육 기간 :{this.props.val[0].term}</span>
                //     <span>노동 강도 :{this.props.val[0].labor}</span><span>경작 난이도 :{this.props.val[0].difficulty}</span>
                // </div>
            )
        }

        return (
            <div>
                로딩중...
            </div>
        )
    }
}

export default SerchResult;