import React from 'react';
import {getDataFromStamp} from "./Helper"
const Weather = ({weather,GetData}) => {
    const onHandler=(event)=>{
        // console.log(event.target.value);
        if(event.key == "Enter"){
            GetData(event.target.value);
            event.target.value="";
        }
    }
    // get time
    return (
        <div className='border border-red-900 col-span-3'>
            <h2 className='text-xl font-bold text-center py-2'>Weather</h2>
            <hr/>
            <div className='w-[300px] mx-auto my-5'>
               <input type="text" placeholder='Search City ' className='border border-black py-1 my-2 w-full rounded-lg
               focus:outline-none px-3' onKeyUp={onHandler}/>
            </div>
            {
                weather == null ? <h2 className='text-2xl text-center font-bold py-4'>Please Enter City Name</h2> 
                :  <div className='shadow-lg bg-[#dcdde1] mx-auto rounded-lg my-3'>
                <h2 className='text-2xl text-center py-4'>{weather.name} {weather.main.temp}°C</h2>
                <h2 className='text-center text-xl py-3'>Sunrise: { getDataFromStamp(weather.sys.sunrise *1000, 1)}</h2>
                <h2 className='text-center text-xl pb-4'>Sunset: {getDataFromStamp(weather.sys.sunset * 1000,1)}</h2>
            </div>
            }   
        </div>
    );
}

export default Weather;
