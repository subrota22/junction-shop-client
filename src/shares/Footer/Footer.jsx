import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer  style={{backgroundColor:"#08428B", color:"white"}} id="footer">
                <div className="footer-top" style={{backgroundColor:"#08428B", color:"white"}}>
                    <div className="container">
                        <div className="row" style={{backgroundColor:"#08428B", color:"white"}}>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Junction</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <NavLink to="/" className="twitter"><i className="bx bxl-twitter"></i></NavLink>
                                        <NavLink to="/" className="facebook"><i className="bx bxl-facebook"></i></NavLink>
                                        <NavLink to="/" className="instagram"><i className="bx bxl-instagram"></i></NavLink>
                                        <NavLink to="/" className="google-plus"><i className="bx bxl-skype"></i></NavLink>
                                        <NavLink to="/" className="linkedin"><i className="bx bxl-linkedin"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">About us</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Services</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Terms of service</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Privacy policy</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Web Design</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Web Development</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Product Management</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Marketing</NavLink></li>
                                    <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Graphic Design</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Subscribe our new Newsletter to get all updated news here...</p>
                                <form action="https://formsubmit.co/itinfobd24@gmail.com" method="post">
                                    <input type="email" name="email" placeholder='Enter your email' />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                    &copy; Copy right by Subrota chandra sarker (2023)
                    </div>
               
                </div>
            </footer>

            {/* <!-- End Footer --> */}

       
  <a href="#header" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
};

export default Footer;