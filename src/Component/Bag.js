import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import { collection, getDocs } from "firebase/firestore";
import { setDoc,doc, updateDoc,getDoc } from 'firebase/firestore';
import {db,storage} from '../firebase'
// import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import { AuthContext } from '../Context/AuthContext';

function Bag() {
    const [arr,setArr]=useState([]);
   const [change,setChange]=useState(false);
   const {user}=useContext(AuthContext);
   let userEmailId=localStorage.getItem("email");
   console.log("userEmailId"+userEmailId);
    const navigate=useNavigate();
    console.log("userOuter"+userEmailId)
 const {setObj,BigObj,BillId,setBillId}=useContext(CartContext);
 const getData=async()=>{
    // console.log("getDoc")
    let arr=[];
    console.log("user"+userEmailId);
            const querySnapshot = await getDocs(collection(db, userEmailId+""));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
      
      arr.push([doc.id,doc.data()]);
      console.log("Obj ",doc.data());
    });
    // console.log("Len "+arr.length)
    // console.log(JSON.stringify(arr));
    setArr([...arr]);
        }
   useEffect(()=>{
    console.log("user Navigate ->",user);
    if(user==null)
    {
      navigate("/Login");
      return ;
    }else
    getData();
   },[])
   const handleViewDetails=(Id)=>{


    setBillId(Id);
    console.log("Id ",Id);
    localStorage.setItem("BillId",Id);
    navigate("/Bill")
    // console.log(JSON.stringify(arr));
        }
  return (
    
    <div className='w-full h-screen bg-white pt-36 Main 'style={{backgroundColor:"white"}}>
        <Navbar></Navbar>
        <div className='   p-4 flex justify-center OrdersMainDiv'>
<div className='h-full bg-white w-full  OrderMainCenterDiv grid grid-cols-2'>
    {
        arr.map((obj)=>{
            {console.log("hello")}
            return (
   <div className='h-56  border-solid m-1' style={{border:"solid"}}>
    <div className='Heading h-1/3  flex justify-center items-center'>
        <h1 className='text-4xl'>Order is Placed on {obj[1].Date} at {obj[1].Time}</h1>
    </div>
    <div className='Heading h-1/3 ' >
        <div className='heading2First w-full h-1/2 flex justify-between p-2'>
        <span>Total Quantity:-</span>
            <span>{obj[1].Items}</span>
        </div>
        <div className='heading2Second w-full h-1/2  flex justify-between p-2'>
        <span>Total Quantity</span>
            <span>{obj[1].Amount}</span>
        </div>
    </div>
    <div className='Heading h-1/3  flex flex-start items-center '>
        <button className='bg-drymeBlue text-white h-1/2 px-4 pt-2 pb-2 ml-4'>Cancel Order</button>
        <button className='bg-drymeBlue text-white h-1/2  px-4 pt-2 pb-2 ml-4' onClick={()=>handleViewDetails(obj[0])}>View Order</button>
    </div>
   </div>
            )       
        }
        )
}
   
   
   
  
</div>
</div>
 </div> 
 
    
  )
}

export default Bag
