import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <>
           <Helmet><title>Blog page </title></Helmet>  
  <main id="main">
{/* 
<!-- ======= Breadcrumbs ======= --> */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Blog</h2>
      <ol>
        <li> Pages </li>
        <li>Blog</li>
      </ol>
    </div>

  </div>
</section>
{/* 
<!-- End Breadcrumbs --> */}
{/* 
<!-- ======= Blog Section ======= --> */}
<section id="blog" className="blog">
  <div className="container" data-aos="fade-up">

    <div className="row">

      <div className="col-lg-8 entries">

        <article className="entry">

          <div className="entry-img">
            <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
          </div>

          <h2 className="entry-title">
            <NavLink to="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</NavLink>
          </h2>

          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <NavLink to="blog-single.html">John Doe</NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <NavLink to="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <NavLink to="blog-single.html">12 Comments</NavLink></li>
            </ul>
          </div>

          <div className="entry-content">
            <p>
              Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
              Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
            </p>
            <div className="read-more">
              <NavLink to="blog-single.html">Read More</NavLink>
            </div>
          </div>

        </article>
        {/* <!-- End blog entry --> */}

        <article className="entry">

          <div className="entry-img">
            <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
          </div>

          <h2 className="entry-title">
            <NavLink to="blog-single.html">Nisi magni odit consequatur autem nulla dolorem</NavLink>
          </h2>

          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <NavLink to="blog-single.html">John Doe</NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <NavLink to="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <NavLink to="blog-single.html">12 Comments</NavLink></li>
            </ul>
          </div>

          <div className="entry-content">
            <p>
              Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
              Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
            </p>
            <div className="read-more">
              <NavLink to="blog-single.html">Read More</NavLink>
            </div>
          </div>

        </article>
        {/* <!-- End blog entry --> */}

        <article className="entry">

          <div className="entry-img">
            <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid" />
          </div>

          <h2 className="entry-title">
            <NavLink to="blog-single.html">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</NavLink>
          </h2>

          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <NavLink to="blog-single.html">John Doe</NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <NavLink to="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <NavLink to="blog-single.html">12 Comments</NavLink></li>
            </ul>
          </div>

          <div className="entry-content">
            <p>
              Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
              Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
            </p>
            <div className="read-more">
              <NavLink to="blog-single.html">Read More</NavLink>
            </div>
          </div>

        </article>
        {/* <!-- End blog entry --> */}

        <article className="entry">

          <div className="entry-img">
            <img src="assets/img/blog/blog-4.jpg" alt="" className="img-fluid" />
          </div>

          <h2 className="entry-title">
            <NavLink to="blog-single.html">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</NavLink>
          </h2>

          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <NavLink to="blog-single.html">John Doe</NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <NavLink to="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></NavLink></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <NavLink to="blog-single.html">12 Comments</NavLink></li>
            </ul>
          </div>

          <div className="entry-content">
            <p>
              Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
              Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
            </p>
            <div className="read-more">
              <NavLink to="blog-single.html">Read More</NavLink>
            </div>
          </div>

        </article>
        {/* <!-- End blog entry --> */}

        <div className="blog-pagination">
          <ul className="justify-content-center">
            <li><NavLink to="#">1</NavLink></li>
            <li className="active"><NavLink to="#">2</NavLink></li>
            <li><NavLink to="#">3</NavLink></li>
          </ul>
        </div>

      </div>
      {/* <!-- End blog entries list --> */}

      <div className="col-lg-4">

        <div className="sidebar">

          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <form action="">
              <input type="text"/>
              <button type="submit"><i className="bi bi-search"></i></button>
            </form>
          </div>
          {/* <!-- End sidebar search formn--> */}

          <h3 className="sidebar-title">Categories</h3>
          <div className="sidebar-item categories">
            <ul>
              <li><NavLink to="#">General <span>(25)</span></NavLink></li>
              <li><NavLink to="#">Lifestyle <span>(12)</span></NavLink></li>
              <li><NavLink to="#">Travel <span>(5)</span></NavLink></li>
              <li><NavLink to="#">Design <span>(22)</span></NavLink></li>
              <li><NavLink to="#">Creative <span>(8)</span></NavLink></li>
              <li><NavLink to="#">Educaion <span>(14)</span></NavLink></li>
            </ul>
          </div>
          {/* <!-- End sidebar categories--> */}

          <h3 className="sidebar-title">Recent Posts</h3>
          <div className="sidebar-item recent-posts">
            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-1.jpg" alt=""/>
              <h4><NavLink to="blog-single.html">Nihil blanditiis at in nihil autem</NavLink></h4>
              <time datetime="2020-01-01">Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-2.jpg" alt=""/>
              <h4><NavLink to="blog-single.html">Quidem autem et impedit</NavLink></h4>
              <time datetime="2020-01-01">Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-3.jpg" alt=""/>
              <h4><NavLink to="blog-single.html">Id quia et et ut maxime similique occaecati ut</NavLink></h4>
              <time datetime="2020-01-01">Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-4.jpg" alt=""/>
              <h4><NavLink to="blog-single.html">Laborum corporis quo dara net para</NavLink></h4>
              <time datetime="2020-01-01">Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/blog/blog-recent-5.jpg" alt=""/>
              <h4><NavLink to="blog-single.html">Et dolores corrupti quae illo quod dolor</NavLink></h4>
              <time datetime="2020-01-01">Jan 1, 2020</time>
            </div>

          </div>
          {/* <!-- End sidebar recent posts--> */}

          <h3 className="sidebar-title">Tags</h3>
          <div className="sidebar-item tags">
            <ul>
              <li><NavLink to="#">App</NavLink></li>
              <li><NavLink to="#">IT</NavLink></li>
              <li><NavLink to="#">Business</NavLink></li>
              <li><NavLink to="#">Mac</NavLink></li>
              <li><NavLink to="#">Design</NavLink></li>
              <li><NavLink to="#">Office</NavLink></li>
              <li><NavLink to="#">Creative</NavLink></li>
              <li><NavLink to="#">Studio</NavLink></li>
              <li><NavLink to="#">Smart</NavLink></li>
              <li><NavLink to="#">Tips</NavLink></li>
              <li><NavLink to="#">Marketing</NavLink></li>
            </ul>
          </div>
          {/* <!-- End sidebar tags--> */}

        </div>
        {/* <!-- End sidebar --> */}

      </div>
      {/* <!-- End blog sidebar --> */}

    </div>

  </div>
</section>
{/* <!-- End Blog Section --> */}

</main>
{/* <!-- End #main -->  */}
        </>
    );
};

export default Blog;