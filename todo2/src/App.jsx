import { useEffect, useState } from "react";
import Input from "./Input";
import Output from "./Output";
import Compete from "./Compete";

function App() {
  const [title , setTitle] = useState([]);
  const [description,setDescription] = useState([]);
  const [comptodo,setComptodo]= useState([ ]);
  const [comptil,setComptil] = useState([]);
  const [up,setUp]=  useState([]);
  //  get title from input page
  const getInput=(til)=>{
    // console.log(til);
    setTitle([
      ...title,
      til
    ])

  }
//  get Description from input page;
const desc =(des)=>{ 
  // console.log(des);
  setDescription([
    ...description,
    des
  ])
}
// delete list from output
const remoHanlder=(items)=>{
  if(description.length == 1 ){
    localStorage.removeItem("desc");
  }
  else{
     // console.log(items);
  // console.log(title[items]);
  // console.log(description[items])
  let now= new Date()
  // console.log(now);
  let dd= now.getDate();
  let mm= now.getMonth();
  let yyyy= now.getFullYear();
  let mi= now.getMinutes();
  let h= now.getHours();
  let s = now.getSeconds();
  let dt = `${dd} - ${mm} - ${yyyy} at ${h}:${mi}:${s}`
  // console.log(dt); 
  const tit= title[items];
  const des = description[items]
  const Data= description.filter(
    (d,i)=> i != items );
    setDescription(Data);
    setComptil([
      ...comptil,
      tit]);
      setUp([
        ...up,
        dt
      ])

  setComptodo([
    ...comptodo,
    des
  ])

  }
}
// put the date in localstorage

useEffect(
  ()=>{
    if(description.length && title.length != 0){
      localStorage.setItem("Desc",JSON.stringify(description));
      localStorage.setItem("title",JSON.stringify(title));
    }
  },[description, title]
)

useEffect(
  ()=>{
    const data= localStorage.getItem("Desc");
    // console.log(data)
    const data2 = localStorage.getItem("title");
    // console.log(data2)
    if( data && data2 != null){
      setDescription(JSON.parse(data));
      setTitle(JSON.parse(data2));
      // setComptil([data2])
    }
  },[]
)
// delete from Complete page

const deleteHandler=(dId)=>{
  // console.log(dId);
  const data = comptodo.filter(
    (data, index) => index != dId);
    setComptodo(data);
}
  return (
    <div className="bg-[#353b48] h-screen pt-5">
      <div className="w-[500px] mx-auto shadow-xl bg-[#2f3640] rounded-lg ">
        <Input get={getInput} desc={desc} />
        <Output title={title} desc={description} remo={remoHanlder}/>
      </div>
      <div className="w-[500px] mx-auto shadow-xl h-[300px] bg-[#2f3640] rounded-lg ">
      <Compete remper={comptodo} camper={comptil} up={up} delet={deleteHandler}/>
      </div>
    </div>
  );
}

export default App;
