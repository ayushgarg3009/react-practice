import React, { useState } from "react";
import "./styles.css";


console.log("hello");
// function App() {
//   // const state = useState();
//   // console.log(state);

//   const [count, setCount] = useState(0);
//   // console.log(setCount);
//   const IncNum = () => {
//     setCount(count + 1)
//     // console.log("clicked" + count);
//   };

//   return (
//     <>
//       <h1> {count} </h1>
//       <button onClick={IncNum}> Click Me </button>
//     </>
//   );


// function App() {

//   let newTime = new Date().toLocaleTimeString()

//   const [ctime, setCtime] = useState(newTime);

//   // setInterval(UpdateTime,1000);
//   const UpdateTime = () => {
//     let newCTime = new Date().toLocaleTimeString();
//     setCtime(newCTime)
//   };

//   return (
//     <>
//       <h1> {ctime} </h1>
//       <button onClick={UpdateTime}> Click Me </button>
//     </>
//   );

function App() {

  let newTime = new Date().toLocaleTimeString()

  const [ctime, setCtime] = useState(newTime);

  // setInterval(UpdateTime,1000);
  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime)
  };

  setInterval(UpdateTime,1000);
  return (
    <>
      <h1> {ctime} </h1>
    </>
  );
}

export default App;
