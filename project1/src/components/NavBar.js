import React from 'react'

const NavBar=()=> {
  return (
    <div>
     {/* <nav className="nav">
          <ul>
            <li><a href="admin">Admin</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="/contact">Services</a></li>
          </ul>
      </nav>  */}

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          
        </ul>
      </nav>
    </div>
  )
}


export default NavBar;