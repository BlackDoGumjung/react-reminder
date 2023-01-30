// {
//   type: 'button',
//   props: {
//     className: 'bg-green',
//     children: {
//       type: 'b',
//       props: {
//         children: 'Element Exercise!'
//       }
//     }
//   },
// }
//버튼을 나타내기 위한 element

React.creactElement(
  type, // html 태그 이름, 리액트 컴포넌트
  [props], //
  [...children] // 자식 element
);

function Button(props) {
  return (
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  );
}

function ConfirmDialog(props) {
  return (
    <div>
      <p></p>
      <Button color="green">확인</Button>
    </div>
  );
}

// {
//   type: 'div',
//   props:{
//     children: [
//       {
//         type: 'p',
//         props: {
//           children: "확인 버튼"
//         }
//       }
//     ]
//   }
// }

function tick() {
  const element = (
    <div>
      <p>react again!</p>
      <p>현재시간 : {new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
