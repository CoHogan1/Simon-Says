import './App.css';
import React, { useState, useEffect } from "react";

let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function App() {
    let [val, setVal] = useState('')

    const run = () => {
        // run changes on a timer.
        console.log("clicked");
        let i = 0

        let test = setInterval(()=> {
            console.log("running")
            setVal(arr[i])
            i++
        },1000)

        let end = setTimeout(()=>{
            clearInterval(test)
        },20000); // 20 seconds
    }


    return (
      <div className="test">
          <button onClick={run}>run test</button>
          <p>this:{val}</p>
      </div>
  )
}
export default App;
