import React, { Component } from 'react';


class SerchResult extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const cropname = this.props.val[0]
        if (this.props.val[0]) {
            return (
                <div>됨?
                    {/* {'aa', console.log(this.props.val[0]['cropname'])} */}
                    {/* {console.log('된다!')} */}
                    <div>작물 이름 :{this.props.val[0].cropname}</div>
                    <div>분류 : {this.props.val[0].category}</div>
                    <span>경작 위치 :{this.props.val[0].location}</span><span>토양 산성도 :{this.props.val[0].maxhp}</span>
                    <span>적정 온도 :{this.props.val[0].maxtemp}</span><span>생육 기간 :{this.props.val[0].term}</span>
                    <span>노동 강도 :{this.props.val[0].labor}</span><span>경작 난이도 :{this.props.val[0].difficulty}</span>
                </div>
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