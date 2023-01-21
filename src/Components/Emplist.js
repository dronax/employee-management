import React, { useEffect, useState } from "react";
import "./style.css";
import Add from "../image/add.png";
import {addemp} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Employeelist from "./Employeelist";
import AddEmployee from "./AddEmployee";


const Emplist = () => {
  const emp = useSelector((state) => state?.emp);
  return (
    <>
      <div className="addbar">
        <div className="addbutton">
          <img src={Add} className="addbuttonimg" alt="addbutton"></img>
        </div>
      </div>
      <div className="list">
        {
          emp?.map((i) => (<Employeelist data={i} />))
        }
      </div>
      <AddEmployee />
    </>
  );
};

export default Emplist;
