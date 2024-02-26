# React Hook?
- [My Velog](https://velog.io/@kitree/React-Hook-%EC%A0%95%EB%A6%AC)

React Hook의 기본 개념을 정리한 글입니다.

---
# React Hook Practice
- [React Hooks series](https://www.youtube.com/playlist?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)

해당 영상을 통해 React Hook을 실습한 내용입니다.

## useState
- useState 훅을 사용하여 상태를 관리합니다.
- useState는 함수 컴포넌트에서 상태를 추가할 수 있도록 합니다.
- 예제에서는 버튼을 클릭할 때마다 시간 상태를 업데이트하여 화면에 시간을 표시합니다.
```js
 function App() {
   const [time, setTime] = useState(1);
   const handleClick = () => {
     let newTime;
     if (time >= 12) {
       newTime = 1;
     } else {
       newTime = time + 1;
     }
     setTime(newTime);
   };
   return (
     <div className="App">
       <span>현재 시각: {time}시</span>
       <button onClick={handleClick}>Update</button>
     </div>
   );
 }

```
