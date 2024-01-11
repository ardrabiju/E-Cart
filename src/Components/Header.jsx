// import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProduct } from '../Redux/Slices/productSlice';


function Header({insideHome}) {
  const wishlist = useSelector(state=>state.wishlistReducer)
 const cart = useSelector(state=>state.cartReducer)
 const dispatch = useDispatch()
 
  return (
   <div>
 <Navbar style={{zIndex:1, top:'0px'}} expand="lg" className="bg-info w-100 position-fixed">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>
        <i className="fa-solid fa-truck-fast me-2"></i>Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {insideHome &&<Nav.Link>
              <input onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))} style={{width:'250px'}} placeholder='Search' className='rounded ms-2 me-2' type="text" />
              </Nav.Link>}
               <Nav.Link> <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} >
            <i className="fa-solid fa-heart text-danger"></i>
              Wishlist  <Badge className='bg-light text-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
              <Nav.Link><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} >
            <i className="fa-solid fa-cart-plus text-success"></i>
              Cart  <Badge className='bg-light text-dark'>{cart?.length}</Badge></Link></Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  )
}

export default Header