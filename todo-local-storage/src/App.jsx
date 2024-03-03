import { useEffect, useState } from "react";
import Input from "./Input";
import Output from "./Output";

function App() {
  const [items,setItems]= useState([
 
  ]);
 const receiveHandler=(list)=>{
  // console.log(list);
  setItems([
    ...items,
    list
  ])
 }
 useEffect(
  ()=>{
    if(items.length != 0){
    localStorage.setItem("Items", JSON.stringify(items))
    }
  },[items]
 )
 useEffect(
  ()=>{
    const data = localStorage.getItem("Items");
    if(data != null){
      setItems(JSON.parse(data));
    }
   
  },[]
 )

 const removeHandler=(listIndex)=>{
  // console.log(listIndex);
  if(items.length == 1 ){
    localStorage.removeItem("Items");
    setItems([])
  }
  else{
    const data= items.filter(
      (data,index)=> listIndex != index);
      setItems(data);

  }
 }
  return (
    <div className="max-w-[1200px] mx-auto shadow-lg py-5">
      <Input receive={receiveHandler}/>
      <Output item={items} remo={removeHandler} />
    </div>
  );
}

export default App;
