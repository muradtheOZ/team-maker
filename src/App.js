import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ManageTrops from './Component/ManageTroops/ManageTrops';
import Header from './Component/Header/Header';


function App() {
  useEffect(() => {
    document.title = "Dream COC Team"
 }, []);



  return (
   <div>
    <Header></Header>
    <ManageTrops></ManageTrops>
    </div>
    
   
  );
}



export default App;
