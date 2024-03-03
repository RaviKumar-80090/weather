import { useEffect, useState } from "react";

function App() {
  const [clock ,setClock] = useState('');

  const fetchClock =()=>{
    let current= new Date().toLocaleTimeString();
    // console.log(current);
    setClock(current);
  }
  setTimeout( fetchClock,1000)
  // useEffect(
  //   ()=>{
  //     fetchClock();
  //   },[clock]
  // )


  return (
    <div className="shadow-lg max-w-[500px] mx-auto py-5 flex justify-center items-center">
      <div className=" w-[300px] h-[300px] flex justify-center items-center">
        <h2 className="text-[50px] text-[#e056fd]">{clock}</h2>
      </div>
    </div>
  );
}

export default App;
