import React, { useEffect, useRef } from 'react'

const USeRefExample2 = () => {
    // With DOM Elements

    const currentRef=useRef(null);


    useEffect(()=>{
        currentRef.current.focus();
        
    })

    console.log(currentRef)

    const handleFocus=()=>{

        currentRef.current.style.backgroundColor="black"

    }
    const handleBlur=()=>{

        currentRef.current.style.backgroundColor=""

    }



    return (
    <>
    <h1>USeRefExample2</h1>
    <input type="text" ref={currentRef}  onFocus={handleFocus} onBlur={handleBlur}/>
    
    </>
  )
}

export default USeRefExample2