import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // const [count,setCount]=useState(0);


    const [input,setInput]=useState("");

    let currentValue=useRef(0);


    useEffect(()=>{
      console.log("Component rendered")
      currentValue.current=currentValue.current+1;

    })

   

  return (

    <>
    <h1>UseRef</h1>

    <input type='text' placeholder='hey' value={input} onChange={(e)=>setInput(e.target.value)}/>
    {/* <h1>{input}</h1> */}
    <h1>The Component rerenders {currentValue.current}  times</h1>
    
    </>
  )
}

export default UseRef






// import React, { useEffect, useRef, useState } from 'react';

// const UseRef = () => {
//   const [count, setCount] = useState(0); // Use state to manage the count
//   const countRef = useRef(0);

//   useEffect(() => {
//     console.log('Component rendered');
//   }, []);

//   const handleClick = () => {
//     countRef.current = countRef.current + 1;
//     setCount(countRef.current); // Update state and trigger a re-render
//   };

//   return (
//     <>
//       <h1>UseRef</h1>
//       <h1>Count: {count}</h1>
//       <button onClick={handleClick}>Increment</button>
//     </>
//   );
// };

// export default UseRef;
