import React, { useEffect, useState } from 'react';
import mockdata from '../../mockdata.json';
import Troops from '../Troops/Troops';
import Calculation from '../Calculation/Calculation';
import './ManageTrops.css'

const ManageTrops = () => {

    const[troops,setTroops] = useState([])

    useEffect(() =>{
        setTroops(mockdata)
      },[])

        const[cartTroops,setCartTroops] = useState([])
        const handleAddTroops =(troop)=>{
          let item = cartTroops.indexOf(troop);
          if(item === -1){
            const newTotal= [...cartTroops,troop]
            setCartTroops(newTotal);
         
          }
      }
    return (
   <div className ="align-self-center">
       <div className= "text-center  bg-light p-2 m-3 sticky-top">
        <Calculation troop={cartTroops}></Calculation>
      </div> 
      <div className = "row mx-auto troops">

      {
        troops.map(troop =>{
          return(
            <Troops handleAddTroops = {handleAddTroops} troops = {troop} > </Troops>
          )
        })
      }
      </div>
      </div>
    );
};

export default ManageTrops;