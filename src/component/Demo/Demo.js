import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./demo.scss"

export default function Demo() {
const [inputdata,setInputdata]=useState({data1:"" ,data2:""});
const {data1,data2}=inputdata;

useEffect(
    ()=>{
        console.log(inputdata);
    },[inputdata]
)

    function onchangehandelar(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
        
    }
  return (
    <div>
        <input type="text" name='data1' onChange={onchangehandelar} placeholder="data1" value={data1} />
        <input type="text" name='data2' onChange={onchangehandelar} placeholder="data2" value={data2} />
    </div>
  )
}
