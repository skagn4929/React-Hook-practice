# React Hook?
- [My Velog](https://velog.io/@kitree/React-Hook-%EC%A0%95%EB%A6%AC)

React Hook의 기본 개념을 정리한 글입니다.

---
# React Hook Practice
- [React Hooks series](https://www.youtube.com/playlist?list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO)

해당 영상을 통해 React Hook을 실습한 내용입니다.

## useState
- useState를 사용하여 상태를 관리합니다.
- useState는 함수 컴포넌트에서 상태를 추가할 수 있도록 합니다.
- 예제에서는 버튼을 클릭할 때마다 시간 상태를 업데이트하여 화면에 시간을 표시합니다.
```jsx
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
- useState를 사용하여 배열 상태와 입력 상태를 관리합니다.
- 예제에서는 입력값을 배열에 추가하고, 배열을 화면에 렌더링하여 동적으로 리스트를 업데이트합니다.

```jsx
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
```
## useEffect
- useEffect를 사용하여 렌더링과 상태 변화에 따른 효과를 관리합니다.
- useEffect는 부수 효과를 수행할 수 있게 해줍니다.
- 예제에서는 특정 상태가 변할 때마다 로그를 출력하여 상태 변화를 추적합니다.
```jsx
 function App() {
   const [count, setCount] = useState(1);
   const [name, setName] = useState("");
   const handleCountUpdate = () => {
     setCount(count + 1);
   };
   const handleInputChange = (e) => {
     setName(e.target.value);
   };
// 렌더링 될때마다 매번 실행됨.
 useEffect(() => {
   console.log("렌더링");
 });

// 마운팅 + count가 변화할때마다 실행됨.
 useEffect(() => {
   console.log("count 변화");
 }, [count]);

// 마운팅 + name이 변경될때마다 실행됨.
 useEffect(() => {
   console.log("name 변화");
 }, [name]);

// 마운팅 될때만 실행됨.
 useEffect(() => {
   console.log("마운팅");
 }, []);
   return (
     <div>
       <button onClick={handleCountUpdate}>Update</button>
       <span>count: {count}</span>
       <br />
       <input type="text" value={name} onChange={handleInputChange} />
       <span>name: {name}</span>
     </div>
   );
 }
```
- useEffect를 사용하여 컴포넌트 마운트 시 타이머를 렌더링하고 토글할 수 있습니다.
- 예제에서는 버튼을 클릭하여 타이머를 토글하여 화면에 타이머를 표시하거나 숨길 수 있습니다.
```jsx
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
```

## useRef
- useRef를 사용하여 DOM 요소에 접근할 수 있습니다.
- 예제에서는 입력 요소에 포커스를 주고, 로그인 버튼 클릭 시 알림창을 출력하고 다시 입력 요소에 포커스를 이동합니다.
```jsx
const App = () => {
  const inputRef = useRef();
  
  useEffect(() => {
  	inputRef.current.focus();
  }, []);
  
  const login = () => {
  	alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>	
    </div>
  );
};
```

## useMemo
- useMemo를 사용하여 계산 결과를 최적화할 수 있습니다.
- 예제에서는 어려운 계산과 쉬운 계산 결과를 입력값에 따라 렌더링하여 화면에 표시합니다.
```jsx
 const hardCalculate = (number) => {
   console.log("어려운 계산");
   for (let i = 0; i < 999999999; i++) {} // 생각하는 시간
   return number + 10000;
 };
 const easyCalculate = (number) => {
   console.log("쉬운 계산");
   return number + 1;
 };

 function App() {
   const [hardNumber, setHardNumber] = useState(1);
   const [easyNumber, setEasyNumber] = useState(1);

   const hardSum = useMemo(() => {
     return hardCalculate(hardNumber);
   }, [hardNumber]);
   const easySum = easyCalculate(easyNumber);

   return (
     <div>
       <h3>어려운 계산기</h3>
       <input
         type="number"
         value={hardNumber}
         onChange={(e) => setHardNumber(parseInt(e.target.value))}
       />
       <span> + 10000 = {hardSum}</span>

       <h3>쉬운 계산기</h3>
       <input
         type="number"
         value={easyNumber}
         onChange={(e) => setEasyNumber(parseInt(e.target.value))}
       />
       <span> + 1 = {easySum}</span>
     </div>
   );
 }
```
## useCallback
- useCallback을 사용하여 함수를 최적화할 수 있습니다.
- 예제에서는 입력 상태에 따라 함수를 호출하여 화면에 로그를 출력합니다.
```jsx
 function App() {
   const [number, setNumber] = useState(0);
   const [toggle, setToggle] = useState(true);
   const someFunction = useCallback(() => {
     console.log(`someFunc: number: ${number}`);
     return;
   }, [number]);
   useEffect(() => {
     console.log("someFunction이 변경되었습니다.");
   }, [someFunction]);
   return (
     <div>
       <input
         type="number"
         value={number}
         onChange={(e) => setNumber(e.target.value)}
       />
       <button
         onClick={() => {
           setToggle(!toggle);
         }}
       >
         {toggle.toString()}
       </button>
       <br />
       <button onClick={someFunction}>Call someFunc</button>
     </div>
   );
 }
```

## useReducer
- useReducer를 사용하여 복잡한 상태 관리를 할 수 있습니다.
- 예제에서는 은행 계좌 거래를 모델링하여 입출금 기능을 구현합니다.
```jsx
// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다.", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>useReducer 은행</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
```

