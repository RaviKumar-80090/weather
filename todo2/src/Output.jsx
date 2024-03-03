import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import Compete from './Compete';
const Output = (props) => {
    let [res, setRes] = useState(false);
    return (
        <div className='w-full'>
            <button onClick={ ()=> setRes(!res)} className={`
            ${ res  ? "" : "active"}
            bg-[blue] px-3 mt-2 ml-2 rounded-lg text-white py-1`}> Todo</button>
            <button onClick={() => setRes(!res)} className={`
             ${ res ? "active" : ""}
            bg-[blue] px-3 mt-2 mx-1 rounded-lg text-white py-1`}> Completed
            </button>
            <ul className='mt-4 px-4'>
                {
                    
                    props.desc.map(
                        (data,index)=>{
                            return(
                                <li className={`
                               
                                border-b text-[#4cd137] font-bold px-3 py-2 capitalize
                                 tracking-wide flex justify-between items-center`} key={index}>
                                    <div>
                                        <h2 className='text-xl capitalize py-2'>{props.title[index]}</h2>
                                        <h2 className='text-sm text-green-300'>{data}</h2>
                                    </div>
                                
                                <MdDelete onClick={()=> props.remo(index)} className='cursor-pointer text-red-500' />
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
