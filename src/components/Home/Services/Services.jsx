import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
           
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4><Link to="/">Cloaths</Link></h4>
              <p className='text-dark'>We are provided best services with any type of product.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4><Link to="/">Cosmetics</Link></h4>
              <p className='text-dark'>We are provided best services with any type of product.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h4><Link to="/">Bags</Link></h4>
              <p className='text-dark'>We are provided best services with any type of product.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h4><Link to="/">T-shirt</Link></h4>
              <p className='text-dark'>We are provided best services with any type of product.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-brightness-high"></i>
              <h4><Link to="/">Pants</Link></h4>
              <p className='text-dark'>We are provided best services with any type of product.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-calendar4-week"></i>
              <h4><Link to="/">LED TV</Link></h4>
             <p className='text-dark'>We are provided best services with any type of product.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section -->  */}
        </>
    );
};

export default Services;