import React from 'react';

const History = ({history}) => {
    return (
        <div className='col-span-1 border border-red-600' >
            <h2 className='text-xl font-bold text-center py-2'>History</h2>
            <hr/>
            <ul className='px-4 py-3'>
                {
                    history.map(
                        (h,index)=>{
                            return(
                                <li className='border-b capitalize' key={index}>
                                    {h.name}
                                </li>
                            )
                        }
                    )
                }
               
            </ul>
        </div>
    );
}

export default History;
