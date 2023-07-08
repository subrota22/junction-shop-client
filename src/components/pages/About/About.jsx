import React from 'react';
import { NavLink } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <>
  <Helmet><title>About page </title></Helmet>
      <main id="main">


        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>About</h2>
              <ol>
                <li>Pages</li>
                <li>About</li>
              </ol>
            </div>

          </div>
        </section>

        {/* <!-- End Breadcrumbs --> */}

        <section id="about" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6">
                <h2> About the services !! </h2>
                <h3>
                  Use customer testimonials: Incorporate quotes or snippets from satisfied customers who have
                  used your product or service. Testimonials add credibility and demonstrate real-life experiences,
                  fostering trust and confidence in potential buyers.
                </h3>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Start with a captivating introduction: Begin by grabbing the reader's
                  attention and clearly stating the purpose of the product or service.
                  Use engaging language to create excitement and curiosity.
                </p>
                <ul>
                  <li> <i className='text-green'>✔✔</i> Describe the features: Provide a comprehensive list of the product or service features. </li>
                  <li> <i className='text-green'>✔✔</i> Highlight the aspects that make it unique or superior to similar offerings in the market. </li>
                  <li> <i className='text-green'>✔✔</i> Include technical specifications, dimensions, materials used, or any other relevant details.</li>
                </ul>
                <p className="fst-italic">
                  Explain the benefits: Clearly communicate the advantages and benefits that customers will experience by using your product or service. Focus on how it solves their problems, fulfills their needs, or enhances their lives. Use specific examples and descriptive language to paint a vivid picture of the positive outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- End About Section --> */}



        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Team</h2>
              <p>Our Hardowrking Team</p>
            </div>

            <div className="row">

              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="about" /></div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>Explicabo voluptatem mollitia et repellat</p>
                    <div className="social">
                      <NavLink to="/"><i class="fa-brands fa-facebook"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-twitter"></i></NavLink>
                      <NavLink to="/"> <i class="fa-brands fa-linkedin"></i> </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="about" /></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>Aut maiores voluptates amet et quis</p>
                    <div className="social">
                      <NavLink to="/"><i class="fa-brands fa-facebook"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-twitter"></i></NavLink>
                      <NavLink to="/"> <i class="fa-brands fa-linkedin"></i> </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="about" /></div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>Quisquam facilis cum velit laborum corrupti</p>
                    <div className="social">
                      <NavLink to="/"><i class="fa-brands fa-facebook"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-twitter"></i></NavLink>
                      <NavLink to="/"> <i class="fa-brands fa-linkedin"></i> </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="about" /></div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>Dolorum tempora officiis odit laborum officiis</p>
                    <div className="social">
                      <NavLink to="/"><i class="fa-brands fa-facebook"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>
                      <NavLink to="/"><i class="fa-brands fa-twitter"></i></NavLink>
                      <NavLink to="/"> <i class="fa-brands fa-linkedin"></i> </NavLink>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* <!-- End Team Section --> */}


        {/* <!-- ======= Our Skills Section ======= --> */}
        <section id="skills" className="skills">
          <div className="container">

            <div className="section-title">
              <h2>Our Skills</h2>
              <p>Check our Our Skills</p>
            </div>

            <div className="row skills-content">

              <div className="col-lg-6">

                <div className="progress">
                  <span className="skill">HTML</span>
                  <ProgressBar now={100} label={`${100}%`} />;
                </div>

                <div className="progress">
                  <span className="skill">CSS</span>
                  <ProgressBar now={100} label={`${90}%`} />;
                </div>

                <div className="progress">
                  <span className="skill">JavaScript <i className="val">75%</i></span>
                  <ProgressBar now={100} label={`${75}%`} />;
                </div>

              </div>

              <div className="col-lg-6">

                <div className="progress">
                  <span className="skill">PHP </span>
                  <ProgressBar now={100} label={`${70}%`} />;
                </div>

                <div className="progress p-2">
                  <span className="skill">WordPress/CMS </span>
                  <ProgressBar now={100} label={`${90}%`} />;
                </div>

                <div className="progress">
                  <span className="skill">Photoshop</span>
                  <ProgressBar now={100} label={`${55}%`} />;
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* <!-- End Our Skills Section --> */}

      </main>

      {/* <!-- End #main --> */}
    </>
  );
};

export default About;