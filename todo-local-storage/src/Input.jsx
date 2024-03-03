import React, { useRef } from "react";

 const Input=(props)=>{
    const inpRef= useRef();
     const handler=()=>{
        if(inpRef.current.value != "" ){
            props.receive(inpRef.current.value);
            inpRef.current.value="";
        }
     }
    return(
        <div className=" mx-auto">
            <div>
                <input type="text" ref={inpRef} className="w-[90%] rounded-lg p-1 ml-4 border border-[blue] focus:outline-none" />
                <button onClick={handler} className="bg-[blue] ml-2 px-5 py-1 rounded-lg "> Add</button>
            </div>

        </div>
    )
 }
 export default Input;