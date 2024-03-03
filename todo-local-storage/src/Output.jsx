import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Output = (props) => {
    const [res , setRes] = useState();
    return (
        <div className='w-full mt-4'  >
            <ul className='px-4'>
                {
                    props.item.map(
                        (data,index)=>{
                            return(
                                <li onClick={()=> setRes(index)} className={`
                                ${res != index ? " text-xl" : " text-sm line-through"}
                                 capitalize  border-b py-2 px-4 relative `} key={index}>
                                    {data}
                                    {
                                        res != index ? <IoMdCheckmark className='absolute top-[10px] text-2xl right-[15px] text-green-400' />
                                        : <IoCloseSharp onClick={()=> props.remo(index) } className='absolute top-[10px] right-[15px] text-2xl text-red-400' />
                                    }
                                
                                
                                </li>

                            )
                        }
                    )
                }
              
               
            </ul>

        </div>
    );
}

export default Output;
