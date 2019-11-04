import React from 'react';
import { Select, Input } from 'antd';

const { Option } = Select;

/***********************************************CSS******************************************************/
const searchBoxStyle = { width: 90 };
const inputStyle = { width: '50vw' };
/********************************************************************************************************/

const selectBefore = (
  <Select defaultValue="작성자" style={searchBoxStyle}>
    <Option value="작성자">작성자</Option>
    <Option value="글 내용">글 내용</Option>
  </Select>
);
// import Favorite from './body-favorite';
// 상대경로일 때 로딩이 안되는 부작용
// import Header from './mainPage/component/header';
// import Body from './mainPage/component/body';

function SearchBox() {
  return (
    <Input
      addonBefore={selectBefore}
      defaultValue="mysite"
      style={inputStyle}
    />
  );
}

export default SearchBox;
