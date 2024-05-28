import "../Styles/Courses.scss";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Courses</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Courses
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="blogPage">
        <div class="container largeContainer">
          <div class="row">
            <p style={{ fontWeight: "bold", fontSize: "50px", margin: "auto" }}>
              Coming Soon
            </p>
            {/* <div class="col-lg-4">
              <div class="sidebar lsb">
                <aside class="widget widget_search">
                  <h3 class="widget_title">Search</h3>
                  <form method="get" action="#" class="search_form">
                    <input type="search" name="s" id="s" placeholder="Search Here"/>
                      <button type="submit"><i class="twi-search2"></i></button>
                  </form>
                </aside>
                <div class="widget widget_categories">
                  <h3 class="widget_title">Categories</h3>
                  <ul>
                    <li><a href="blog1.html">SEO Marketing</a><span>10</span></li>
                    <li><a href="blog1.html">Financial Work</a><span>07</span></li>
                    <li><a href="blog1.html">Business Growth</a><span>05</span></li>
                    <li><a href="blog1.html">Market Strategy</a><span>02</span></li>
                  </ul>
                </div>
                <aside class="widget">
                  <h3 class="widget_title">Popular Posts</h3>
                  <div class="pp_post_item">
                    <img src="assets/images/blog/t3.jpg" alt/>
                      <a href="single-blog.html">Extend market really driven results</a>
                      <span><i class="twi-calendar-alt2"></i>Mar 21, 2021</span>
                  </div>
                  <div class="pp_post_item">
                    <img src="assets/images/blog/t1.jpg" alt/>
                      <a href="single-blog.html">Losing never felt so good energy everything</a>
                      <span><i class="twi-calendar-alt2"></i>Mar 21, 2021</span>
                  </div>
                  <div class="pp_post_item">
                    <img src="assets/images/blog/t2.jpg" alt/>
                      <a href="single-blog.html">What is Conversion Rate Optimization?</a>
                      <span><i class="twi-calendar-alt2"></i>Mar 21, 2021</span>
                  </div>
                </aside>
                <div class="widget">
                  <h3 class="widget_title">Tags</h3>
                  <div class="tagcloud">
                    <a href="blog1.html">UI/UX</a>
                    <a href="blog1.html">Services</a>
                    <a href="blog1.html">Tools</a>
                    <a href="blog1.html">Product</a>
                    <a href="blog1.html">Solutions</a>
                    <a href="blog1.html">Combo</a>
                    <a href="blog1.html">Cart</a>
                    <a href="blog1.html">Repair</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-md-6">
                  <div class="blogItem03 bbrm">
                    <div class="blogThumb">
                      <img src="assets/images/blog/3.jpg" alt/>
                    </div>
                    <div class="blogContent">
                      <div class="bmeta">
                        <span><i class="twi-folder2"></i><a href="blog1.html">Marketing</a></span>|<span><i class="twi-user2"></i><a href="blog1.html">David Smith</a></span>
                      </div>
                      <h3><a href="single-blog.html">The accounting department also keeps detailed records</a></h3>
                      <a class="rm_more" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blogItem03 bbrm">
                    <div class="blogThumb">
                      <img src="assets/images/blog/4.jpg" alt/>
                    </div>
                    <div class="blogContent">
                      <div class="bmeta">
                        <span><i class="twi-folder2"></i><a href="blog1.html">Marketing</a></span>|<span><i class="twi-user2"></i><a href="blog1.html">David Smith</a></span>
                      </div>
                      <h3><a href="single-blog.html">Business writes many other cheques during the course</a></h3>
                      <a class="rm_more" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blogItem03 bbrm">
                    <div class="blogThumb">
                      <img src="assets/images/blog/5.jpg" alt/>
                    </div>
                    <div class="blogContent">
                      <div class="bmeta">
                        <span><i class="twi-folder2"></i><a href="blog1.html">Marketing</a></span>|<span><i class="twi-user2"></i><a href="blog1.html">David Smith</a></span>
                      </div>
                      <h3><a href="single-blog.html">Efficiently monetize models transparent sources</a></h3>
                      <a class="rm_more" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blogItem03 bbrm">
                    <div class="blogThumb">
                      <img src="assets/images/blog/6.jpg" alt/>
                    </div>
                    <div class="blogContent">
                      <div class="bmeta">
                        <span><i class="twi-folder2"></i><a href="blog1.html">Marketing</a></span>|<span><i class="twi-user2"></i><a href="blog1.html">David Smith</a></span>
                      </div>
                      <h3><a href="single-blog.html">Losing never felt so good energy everything</a></h3>
                      <a class="rm_more" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blogItem03 bbrm">
                    <div class="blogThumb">
                      <img src="assets/images/blog/7.jpg" alt/>
                    </div>
                    <div class="blogContent">
                      <div class="bmeta">
                        <span><i class="twi-folder2"></i><a href="blog1.html">Marketing</a></span>|<span><i class="twi-user2"></i><a href="blog1.html">David Smith</a></span>
                      </div>
                      <h3><a href="single-blog.html">How to Create a Digital Marketing Plan for the second</a></h3>
                      <a class="rm_more" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blogItem03 bbrm">
                    <div class="blogThumb">
                      <img src="assets/images/blog/8.jpg" alt/>
                    </div>
                    <div class="blogContent">
                      <div class="bmeta">
                        <span><i class="twi-folder2"></i><a href="blog1.html">Marketing</a></span>|<span><i class="twi-user2"></i><a href="blog1.html">David Smith</a></span>
                      </div>
                      <h3><a href="single-blog.html">Are Pinterest Stories Right for Your Marketing Strategy?</a></h3>
                      <a class="rm_more" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="que_pagination text-center">
                    <a class="prev" href="blog2.html"><i class="twi-angle-double-left1"></i></a>
                    <span class="current">1</span>
                    <a href="blog2.html">2</a>
                    <a href="blog2.html">3</a>
                    <span class="page-numbers dots">…</span>
                    <a href="blog2.html">10</a>
                    <a class="next" href="blog2.html"><i class="twi-angle-double-right1"></i></a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
