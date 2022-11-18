import React,{useState} from 'react';
import './App.css';
import InputDetails from './component/Details/InputDetails';
import PrintDetail from './component/Details/PrintDetail'

const App=()=> {

  const [detail,setDetail]=useState([])

const detailHandler=(obj)=>{

  setDetail((prevData)=>{
    return [...prevData,obj]
  })
}

  return (
    <div>
    <InputDetails ondetail={detailHandler} />
    {<PrintDetail details={detail}/> }
     </div>  
    )
}

export default App;
