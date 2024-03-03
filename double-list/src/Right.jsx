import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Right = (props) => {
    const [toggle,setToggle]  = useState();
    return (
        <div>
            <h2 className=' text-3xl font-bold text-center text-[#8e44ad] py-2'>Right List</h2>
            <div className='px-4'>
            <ul>
                {
                    props.rightData.map(
                        (data,index)=>{
                            return(
                                <li onClick={()=> setToggle(index)} className={`
                                ${toggle != index ? "text-sm" : "texl-lg line-through text-slate-500 " }
                                shadow-lg cursor-pointer p-2 mt-3 px-3 capitalize font-bold rounded-lg mt-2 relative`} key={index} >
                                    {data}
                                    {
                                        toggle != index ?  <IoMdCheckmark className='absolute top-[10px] text-xl right-[15px] text-green-400' />
                                        :<IoCloseSharp onClick={()=> props.rem(index) } className='absolute top-[10px] right-[15px] text-xl text-red-400' />
                                    }
                                </li>

                            )
                        }
                    )
                }
            </ul>

        </div>
        </div>
    );
}

export default Right;
