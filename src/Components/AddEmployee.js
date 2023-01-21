import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"
import {addemp} from "../Redux/action";


const AddEmployee = () => {
  const emp=useSelector((state)=>state?.emp)
  const [id,setId]=useState('')
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartmnet] = useState("");
  const dispatch=useDispatch()
  const submit=()=>{
    // if(id===emp.id){
    //   alert("ID Already Exists")
    // }
    {
    const data={id:id,name:name,phone:phone,department:department}
    setId('')
    setName('')
    setPhone('')
    setDepartmnet('')
    dispatch(addemp(data))
    }
  }
  
  return (
    <div className="box">
      <form>
        <label>ID:</label>
        <br />
        <input
          type="text"
          name="fname"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          type="text"
          name="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label>Department:</label>
        <br />
        <input
          type="text"
          name="Department"
          value={department}
          onChange={(e) => setDepartmnet(e.target.value)}
        />
        <br />
      </form>
      <button onClick={submit}>Add Employee</button>
    </div>
  );
};

export default AddEmployee;
