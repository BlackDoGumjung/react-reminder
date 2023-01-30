import React from 'react';
import Book from './Book';

function Library() {
  return (
    <div>
      <Book name="React" chapter={1} />
      <Book name="Vue" chapter={2} />
      <Book name="JS" chapter={3} />
    </div>
  );
}

//jsx? js, xlm/html 함께 사용하는 js 확장문법
// 코드 간결, 가독성, 보안성
// {} 이용한 코드 삽입

export default Library;
