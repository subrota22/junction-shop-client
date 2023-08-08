
import { NavLink } from 'react-router-dom';
function Header() {
  return (
      <navbar style={{backgroundColor:"#08428B", color:"white"}} id="header" className="fixed-top d-flex align-items-center py-4">
      <div className="container d-flex align-items-center">
  
        <h1 className="logo me-auto"><NavLink to="/" className="text-white">Junction</NavLink></h1>
    
        <nav id="navbar" className="navbar">
          <ul>
            <li><NavLink to="/" className="active">Home</NavLink></li>
  
            <li className="dropdown"><NavLink  style={{color:"white"}}><span>About</span> <i className="bi bi-chevron-down"></i></NavLink>
              <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/testimonal">Testimonials</NavLink></li>
  
                <li className="dropdown"><NavLink to="#"><span>More link</span> <i className="bi bi-chevron-right"></i></NavLink>
                  <ul>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/counter">Toolkit counter</NavLink></li>
                    <li><NavLink to="/add-product">Add product</NavLink></li>
                    <li><NavLink to="/added-product">Added products</NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><NavLink to="/services"  style={{color:"white"}}>Services</NavLink></li>
            <li><NavLink to="/portfolio"  style={{color:"white"}}>Portfolio</NavLink></li>
            <li><NavLink to="/pricing"  style={{color:"white"}}>Pricing</NavLink></li>
            <li><NavLink to="/blog"  style={{color:"white"}}>Blog</NavLink></li>
            <li><a href="/all-products"  style={{color:"white"}}>All products</a></li>
            <li><NavLink to="/contact"  style={{color:"white"}}>Contact</NavLink></li>
   
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}
  
      </div>
    </navbar> 
   
  );
}

export default Header;