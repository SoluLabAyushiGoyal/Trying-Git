import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import HomeProducts from './HomeProducts';
import HomeRemaining from './HomeRemaining';
import HomeProductArray from './HomeProductArray';


const HomeMid = () => {
    const[itemArray,setItemArray] =useState([...HomeProductArray])
    const [rangeValue,setRangeValue]=useState([0,600])
    useEffect(()=>{
        setItemArray.filter(item=>{
            return rangeValue[0]<item.price<rangeValue[0]
        })
    }
,[rangeValue])
    return(
        <>
        <SideBar rangeValue={rangeValue } setRangeValue={setRangeValue}/>
        <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {itemArray.map((item)=>{
         return <HomeProducts key={item.id} imgSrc={item.imgSrc} name={item.name} price={item.price}/>
        })}
        
        </div>
        <HomeRemaining/>
        
        
        </>
    );
}

export default HomeMid; 
