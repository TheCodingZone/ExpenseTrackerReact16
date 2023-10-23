import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Componants/Navbar/Navbar.css'
// import AuthContext from './Pages/auth-context'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from './Pages/AuthRedux'
const Navbar = () => {
  const navigate=useNavigate();
  // const authCtx=useContext(AuthContext);
  const dispatch=useDispatch();
  const logoutHandler=(event)=>{
    event.preventDefault();
    //  authCtx.logout();
    dispatch(authActions.logout());
     navigate('/Login')
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link to='/Home' class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        
        <li class="nav-item">
          <Link to='/Signup' class="nav-link disabled">Signup</Link>
        </li>
        <li class="nav-item">
          <Link to='/Logout' class="nav-link disabled" onClick={logoutHandler}>Logout</Link>
        </li>
      </ul>
      <div  className="cart">
    
    <div className='cartHeading'>YOUR CART</div>
    

    <img src="https://e7.pngegg.com/pngimages/600/348/png-clipart-shopping-cart-online-shopping-shopping-cart-text-logo.png" alt="" srcset="" className='logo'/>
    <div className='items'>3</div>
    </div>
 
    </div>
  </nav>
  )
}

export default Navbar
