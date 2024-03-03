import React from 'react';
import { useRef } from 'react';

const Input = (props) => {
    const inpRef= useRef();
    const handler=()=>{
        if(inpRef.current.value != ''){
            props.receive(inpRef.current.value);
            inpRef.current.value="";
        }
    }
    return (
        <div className='max-w-full '>
            <div>
                <h1 className=' text-3xl font-bold text-center text-[#8e44ad] py-2'>Left List</h1>
                <input type="text" ref={inpRef} className="w-[80%] rounded-lg p-1 ml-4 border border-[blue] focus:outline-none" />
                <button onClick={handler} className="bg-[blue] ml-2 px-5 py-1 rounded-lg "> Add</button>
            </div>
            
        </div>
    );
}

export default Input;
