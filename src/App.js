import { useState, useEffect } from "react";
import Timer from "./component/Timer";

// ----------*/ useState 연습 /*------
//
// function App() {
//   const [time, setTime] = useState(1);
//   const handleClick = () => {
//     let newTime;
//     if (time >= 12) {
//       newTime = 1;
//     } else {
//       newTime = time + 1;
//     }
//     setTime(newTime);
//   };
//   return (
//     <div className="App">
//       <span>현재 시각: {time}시</span>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

// function App() {
//   const [names, setNames] = useState(["홍길동", "김민수"]);
//   const [input, setInput] = useState("");
//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };
//   const handleUpload = () => {
//     setNames((prev) => {
//       console.log("이전스테이트: ", prev);
//       return [input, ...prev];
//     });
//   };
//   return (
//     <div>
//       <input type="text" value={input} onChange={handleInputChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {names.map((name, idx) => {
//         return <p key={idx}>{name}</p>;
//       })}
//     </div>
//   );
// }
// ----------------------------------------------------------------

// ----------*/ useEffect 연습 /*------
//
// function App() {
//   const [count, setCount] = useState(1);
//   const [name, setName] = useState("");
//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   };
//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   };
// 렌더링 될때마다 매번 실행됨.
// useEffect(() => {
//   console.log("렌더링");
// });
//
// 마운팅 + count가 변화할때마다 실행됨.
// useEffect(() => {
//   console.log("count 변화");
// }, [count]);
//
// 마운팅 + name이 변경될때마다 실행됨.
// useEffect(() => {
//   console.log("name 변화");
// }, [name]);
//
// 마운팅 될때만 실행됨.
// useEffect(() => {
//   console.log("마운팅");
// }, []);
//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count: {count}</span>
//       <br />
//       <input type="text" value={name} onChange={handleInputChange} />
//       <span>name: {name}</span>
//     </div>
//   );
// }

function App() {
  const [showTimer, setshowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setshowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
}

export default App;
