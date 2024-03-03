import React from 'react';
import { IoClose } from "react-icons/io5";
const Output = (props) => {
    return (
        <>
        
            {
                props.nameI.map(
                    (d,index)=>{
                        return(
                            <div className='w-[200px] bg-[#bdc3c7] rounded-lg shadow-lg my-4
                            relative' key={index}>
                            <h2 className='text-2xl px-4 text-white py-2 '>Name : {d}</h2>
                            <h3 className='text-2xl px-4 text-white py-2 '>Gender: {props.genderI[index]} </h3>
                            <h3 className='text-2xl px-4 text-white py-2 '>Age: {props.ageI[index]} </h3>
                            <IoClose onClick={()=> props.remo(index)} className='absolute  top-[10px] right-[10px] text-2xl cursor-pointer text-white' />
                            </div>
                        )
                    }
                )
            }
           
</>
    );
}

export default Output;
