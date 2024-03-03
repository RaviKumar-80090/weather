import { useState } from "react";
import Input from "./Input";
import Left from "./Left";
import Right from "./Right";
import { useEffect } from "react";

function App() {
  const [left,setLeft] = useState([]);
  const [right,setRight]=  useState([]);
  // Receive data form Input
  const receiveData= ( listItem)=>{
    // console.log(listItem);
    setLeft([
      ...left,
      listItem
    ]);
  }
  
  // List Item move left To right
   const leftMove=(leftId)=>{
    // console.log("right move",leftId);
    // retrive data from left
    // console.log(left[leftId])
    const data= left[leftId];
    const newData= left.filter(
      (data,index)=> index != leftId);
      setLeft(newData);
    setRight([
      ...right,
      data
    ])
   }
    // send the local storage
    useEffect(
      ()=>{
        if(left.length != 0){
          localStorage.setItem("right",JSON.stringify(left));
        }

      },[left]

    )
    //  retrive from localstorage
    useEffect(
      ()=>{
        const lsData = localStorage.getItem("right");
        // console.log(lsData)
        if( lsData != null){
          setRight(JSON.parse(lsData));
        }
      },[]
    )
// delete from right List
   const removeRight=(rt)=>{
    // console.log(rt);
    if(right.length == 1){
      localStorage.removeItem("right");
      setRight([])
    }
    else{
      const data= right.filter(
        (item ,index)=> index != rt);
        setRight(data);
    }
   }

  return (
    <div className="max-w-[1220px] mx-auto shadow-lg grid grid-cols-4">
      <div className="col-span-2 border border-red-500 p-4">
        <Input receive={receiveData}/>
        <Left leftData={left}  leftmove={leftMove}/>
      </div>
      <div className="col-span-2 border border-red-500 p-4">
        <Right rightData={right} rem={removeRight} />
      </div>
    </div>
  );
}

export default App;
