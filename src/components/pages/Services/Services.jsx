import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Services = () => {
  return (
   <>
          <Helmet><title>Services page </title></Helmet>
  <main id="main">
{/* <!-- ======= Breadcrumbs ======= --> */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Services</h2>
      <ol>
        <li><NavLink to="/" href="index.html">Pages</NavLink></li>
        <li>Services</li>
      </ol>
    </div>

  </div>
</section>
{/* <!-- End Breadcrumbs --> */}

{/* <!-- ======= Services Section ======= --> */}
<section id="services" className="services">
  <div className="container">

    <div className="row">
      <div className="col-md-6">
        <div className="icon-box">
          <i className="bi bi-briefcase"></i>
          <h4><NavLink to="/" href="#">Lorem Ipsum</NavLink></h4>
          <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-card-checklist"></i>
          <h4><NavLink to="/" href="#">Dolor Sitema</NavLink></h4>
          <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-bar-chart"></i>
          <h4><NavLink to="/" href="#">Sed ut perspiciatis</NavLink></h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-binoculars"></i>
          <h4><NavLink to="/" href="#">Nemo Enim</NavLink></h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-brightness-high"></i>
          <h4><NavLink to="/" href="#">Magni Dolore</NavLink></h4>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-calendar4-week"></i>
          <h4><NavLink to="/" href="#">Eiusmod Tempor</NavLink></h4>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>
    </div>

  </div>
</section>
{/* <!-- End Services Section --> */}

{/* <!-- ======= Features Section ======= --> */}
<section id="features" className="features">
  <div className="container">

    <div className="section-title">
      <h2>Features</h2>
      <p>Check our Features</p>
    </div>

    <div className="row">
      <div className="col-lg-3">
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</NavLink>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Architecto ut aperiam autem id</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="assets/img/features-1.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Et blanditiis nemo veritatis excepturi</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="assets/img/features-2.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="assets/img/features-3.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="assets/img/features-4.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-5">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="assets/img/features-5.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
{/* <!-- End Features Section --> */}

</main>
{/* <!-- End #main --> */}

        </>
    );
};

export default Services;