import React, { Component } from 'react';
import { Select, Input } from 'antd';

// const { Option } = Select;

/***********************************************CSS******************************************************/
const searchBoxStyle = { width: 90 };
const inputStyle = { width: '50vw' };
/********************************************************************************************************/

// const selectBefore = (
//   <Select defaultValue="작성자" style={searchBoxStyle}>
//     <Option value="작성자">작성자</Option>
//     <Option value="글 내용">글 내용</Option>
//   </Select>
// );
// import Favorite from './body-favorite';
// 상대경로일 때 로딩이 안되는 부작용
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.keyPress = this.keyPress.bind(this);
  }

  searchCrop(keyword) {

    let url = `http://localhost:5000/search/${keyword}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        let arr = [res[0]];
        this.props.func2(arr)
      })
      .catch(err => console.error(err));
  }

  keyPress(e) {
    if (e.charCode === 13) {
      this.props.func();
      this.searchCrop(document.querySelector('input.ant-input').value)
    }
  }

  render() {
    return (
      <Input
        onKeyPress={this.keyPress}
        // addonBefore={selectBefore}
        placeholder="Search-Crops"
        style={inputStyle}
      />
    );
  }
}

export default SearchBox;
