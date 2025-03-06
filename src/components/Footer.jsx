import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='footer'>

        <h3>FoodiesHub</h3>

        <div className="footer-options">
          <ul>
            <li  onClick={()=>navigate(`/`)}>HOME</li>
            <li  onClick={()=>navigate(`/category/Chicken`)}>CHICKEN</li>
            <li  onClick={()=>navigate(`/category/Breakfast`)}>BREAKFAST</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Dessert`)}>DESSERT</li>
            <li  onClick={()=>navigate(`/category/Goat`)}>GOAT</li>
            <li  onClick={()=>navigate(`/category/Lamb`)}>LAMB</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Pasta`)}>PASTA</li>
            <li  onClick={()=>navigate(`/category/Seafood`)}>SEAFOOD</li>
            <li  onClick={()=>navigate(`/category/Starter`)}>STARTER</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Vegan`)}>VEGAN</li>
            <li  onClick={()=>navigate(`/category/Side`)}>SIDE</li>
            <li  onClick={()=>navigate(`/category/Miscellaneous`)}>MISCELLANEOUS</li>
          </ul>
        </div>

        <hr />
        <p>FoodiesHub - &copy; 2025 - All Rights Reserved</p>
        <p>Contact Us</p>
        <p>sujathap07082004@gmail.com</p>
        <p>+917358776904</p>
        </div>
    
  )
}

export default Footer