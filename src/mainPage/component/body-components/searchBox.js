import React from 'react';
import { Select, Input } from 'antd';

const { Option } = Select;
const selectBefore = (
    <Select defaultValue="작성자" style={{ width: 90 }}>
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
                style={{ width: "50vw" }}
            />
    );
  }
  
export default SearchBox;
