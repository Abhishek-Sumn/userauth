import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center h-screen flex-col'>

      <div className='border border-purple-600 p-8 rounded-md'>Dashboard</div>

      <button type='button' onClick={() => dispatch(logout())} 
      className=' p-8 '
      >Logout</button>

    </div>
  )
}

export default Dashboard