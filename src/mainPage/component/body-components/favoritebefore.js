import React, { Component } from 'react'
import { Descriptions } from "antd";


class FavoriteBefore extends Component {
    render() {
        return (
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
        )
    }
}

export default FavoriteBefore
