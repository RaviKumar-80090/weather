import { useState } from "react";
import History from "./History";
import Weather from "./Weather";

function App() {
  const [weather , setWeather] = useState(null);
  const [history , setHistory] = useState([]);
  const API_KEY = `21805bff7224936fa25d6cec016a0a4b`;
  const GetData= async (city)=>{
    // console.log(city);
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   const res= await fetch(url);
   const data = await res.json();
  //  console.log(data);
  if(data.cod == "200" ){
    setWeather(data);
    setHistory([
      ...history,
      {
        name:city,
        timestamp: new Date().getTime()
      }
    ])
  }
  else{
    setWeather(null);
  }
   


  }
  // console.log(weather);
  return (
    <div className="max-w-[1200px] shadow-lg  mx-auto py-5 px-5 grid grid-cols-4">
      <History history={history}/>
      <Weather weather={weather} GetData={GetData}/>
    </div>
  );
}

export default App;
