import React, { useRef } from 'react';

const Input = (props) => {
    const inpRef1 = useRef();
    const inpRef2 = useRef();
    const inpRef3 = useRef();
    const inpHandler = () =>{
        if((inpRef1.current.value && inpRef2.current.value && inpRef3.current.value) != ""){
            props.handler(inpRef1.current.value);
            inpRef1.current.value=""
            props.age(inpRef2.current.value);
            inpRef2.current.value=""
            props.gender(inpRef3.current.value);
            inpRef3.current.value=""
        }
        else{
            alert("please fill the field")
        }
    }
    return (
        <div>
                <div className='w-full'>
                    <label htmlFor="" className=' font-bold px-3'> Name:</label>
                    <input type="text" ref={inpRef1} className='border  w-[90%] border-[blue] rounded-lg mx-4 focus:outline-none px-2 border-[black]' />
                </div>
                <div className='w-full'>
                    <label htmlFor="" className=' font-bold px-3' >Gender: </label>
                    <input type="text" ref={inpRef2} className='border w-[90%] border-[blue] rounded-lg mx-4 focus:outline-none px-2   border-[black]'/>
                </div>
                <div className='w-full'>
                    <label htmlFor="" className=' font-bold px-3'> Age:</label>
                    <input type="text" ref={inpRef3} className='border  w-[90%] border-[blue] rounded-lg mx-4 focus:outline-none px-2  border-[black]' />
                </div>
                <button onClick={inpHandler}  className='bg-[blue] px-4 table mx-auto my-3 rounded-lg text-white' > Save</button>
            
        </div>
    );
}

export default Input;
