import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 5;

function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log(`isFull : ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increseCount} disabled={isFull}>
        Enter
      </button>
      <button onClick={decreaseCount}>Exit</button>
      {isFull && <p>정원 초과</p>}
    </div>
  );
}

export default Accomodate;

//hook : state와 lifecycle 기능에 갈고리(hook)를 걸어 원하는 시점에 함수 실행
//useState : state 사용 훅 const [a, setA] = useState(init);
//useEffect : sideEffect 수행 hook, useEffect(()=>{}, []);
//useMemo : Memorised value return hook, const memorizedValue = useMemo(값생성함수, 의존성 배열);
//useCallback : 함수 재정의 작업 없애기
//useRef : 특정 컴포넌트 접근 객체 사용 위한 hook, const refCounter = useRef(init); .current 속성으로 접근
