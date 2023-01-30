import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <div>
      <Comment name={'Steve'} comment={'good job!'} />
      <Comment name={'Tony'} comment={'GJ!'} />
    </div>
  );
}

export default CommentList;

//props : 리액트 컴포너느 속성, 컴포넌트에 전달할 정보값 담은 js 객체
// 읽기 전용, props 값은 항상 같은 값 리턴
// 키-값 상태 문자열 외 정수, 변수, 다른 컴포넌트 들어갈 경우 중괄호 사용하여 감싸주기
// 클래스 컴포넌트, 함수 컴포넌트 (보통 함수, 항상 대문자로 시작)
