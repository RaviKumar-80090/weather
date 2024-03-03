import React, { useRef } from 'react';

const Input = (props) => {
    const inpRef1= useRef();
    const inpRef2= useRef();
    const inpHandler=()=>{
        if( (inpRef1.current.value && inpRef2.current.value) != ""){
            props.get(inpRef1.current.value);
            props.desc(inpRef2.current.value);
            inpRef1.current.value="";
            inpRef2.current.value="";

        }
        else{
            alert("please fill the Field");
        }
    }
    return (
        <div className='w-full border border-red-800 flex'>
           <input type="text" ref={inpRef1} placeholder='Title' className='my-3 mx-2 px-2 py-1 rounded-lg focus:outline-none caret-orange-900 text-orange-600' />
           <input type="text"  ref={inpRef2} placeholder='Description' className='my-3 mx-2 py-1 px-2 rounded-lg focus:outline-none caret-orange-900 text-orange-600' />
            <button onClick={inpHandler} className=' my-3 px-3 rounded-lg text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700'>Add</button>
        </div>
    );
}

export default Input;
