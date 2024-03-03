import { useEffect, useState } from "react";
import Input from "./Input";
import Output from "./Output";

function App() {
  const [name,setName] = useState([]);
  const [age,setAge] = useState([]);
  const [gender,setGender] = useState([]);
  const hndler=(hh) =>{
    // console.log(hh);
    setName([...name,
    hh])
  }
  // console.log(name)
  const ageHandler= (age)=>{
    setAge(age)
  }
   const genderHandler=( gender)=>{
    setGender(gender);
   }
  //   delet user data
  const removeHandler=(userId)=>{
    console.log(age[userId]);
    const data = name.filter(
      (d,i)=> i != userId);
      setName(data);
      // const data1 = age[userId].filter(
      //   (d,i)=> i != userId) ;
      //   setAge(data1);
      //   const data2= gender.filter(
      //     (d,i)=> i != userId)
      //     setGender(gender);
  }
  // localstorage
  // useEffect(
  //   ()=>{
  //     localStorage.setItem("Name",JSON.stringify(name));
  //     localStorage.setItem("Gender",JSON.stringify(gender));
  //     localStorage.setItem("Age",JSON.stringify(age));
  //   },[name,age,gender]
  // )
  return (
    <div className='max-w-[1220px] mx-auto py-4 px-5 grid md:grid-cols-4 shadow-xl' >
      <div className="col-span-3  grid grid-cols-3 gap-5 ">
      <Output nameI={name} ageI={age} genderI={gender}  remo={removeHandler}/>
      </div>
      <div className="col-span-1 shadow-lg rounded-lg">
        <Input  handler={hndler} gender={genderHandler} age={ageHandler} />
      </div>
      
    </div>
  );
}

export default App;
