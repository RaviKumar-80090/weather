import React from 'react';
import { FaShare } from "react-icons/fa6";
const Left = (props) => {
    return (
        <div className='px-4'>
            <ul>
                {
                    props.leftData.map(
                        (data,index)=>{
                            return(
                                <li  className='shadow-lg cursor-pointer p-2 mt-3 px-3 capitalize font-bold rounded-lg mt-2 relative' key={index} >
                                    {data}
                                    <FaShare onClick={()=>props.leftmove(index)} className='absolute top-[10px] right-[15px] text-xl text-red-400' />
                                </li>

                            )
                        }
                    )
                }
            </ul>

        </div>
    );
}

export default Left;
