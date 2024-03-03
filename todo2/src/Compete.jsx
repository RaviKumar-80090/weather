import React from 'react';
import { MdDelete } from "react-icons/md";
const Compete = (props) => {
    return (
        <div className='w-full'>
             <ul className='mt-4 px-4'>
                {
                    props.remper.map(
                        (data,index) =>{
                            return(
                                <li className={`
                                border-b text-[#4cd137] font-bold px-3 py-2 capitalize
                                 tracking-wide flex justify-between items-center`} key={index}>
                                    <div>
                                        <h2 className='text-xl capitalize py-2'> {props.camper[index]}</h2>
                                        <h2 className='text-sm text-green-300'>{data}</h2>
                                        <h2 className='text-sm text-green-300'>{props.up[index]}</h2>
                                    </div>
                                
                                <MdDelete onClick={() => props.delet(index)} className='cursor-pointer text-red-500' />
                                </li>

                            )
                        }
                    )
                }
                              
            </ul>
        </div>
    );
}

export default Compete;
