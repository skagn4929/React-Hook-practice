import { useState } from "react";

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

function App() {
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setNames((prev) => {
      console.log("이전스테이트: ", prev);
      return [input, ...prev];
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
