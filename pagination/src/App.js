import logo from './logo.svg';
import './App.css';
import Page from './Component/Page/Page'
import { getEmployeeData } from './API/Service';
import { useEffect, useState } from 'react';

function App() {

  const [employeeData, setEmployeeData]=useState([])

  const employeeResult = async()=>{
    const res= await getEmployeeData();
    setEmployeeData(res);
    
  }
  useEffect(()=>{
    employeeResult();
  },[])

  return (
    <>
    <Page/>
    </>
  );
}

export default App;
//https://xpagination-rho.vercel.app/
