// 이 컴포넌트는 회색바탕에 가운데 오는 흰색화면을 설정
import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  width: 1118px;
  height: 820px;

  position: relative; /* 박스 아래에 추가버튼을 만들기위해서 만든 값 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정한다 */
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column; /* 위에서 아래로 */
`;

function Template({ children }) { // 임의의 children이라는 props를 설정해준다
    return <TemplateBlock>{children}</TemplateBlock>;
} // children을 TodoTemplateBlock내부에 랜더링되게끔해준다

export default Template;