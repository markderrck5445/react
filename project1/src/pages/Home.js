import React from 'react'
import pic6 from '../img/pic6.jpg';
import pic7 from '../img/pic7.jpg';
import pic10 from '../img/pic10.jpg';
import pic8 from '../img/pic8.jpg';
import pic9 from '../img/pic9.jpg';
import pic11 from '../img/pic11.jpg';
import pic1 from '../img/pic1.jpg';
import logo192 from '../img/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';
const Home=()=> {
  return (
    <div>
      <div className="container-con">
     <div className="col-1">
        <h1 className="shilla">
         Welcome to Our Creative Space 
        </h1>

        <p>
        Discover creativity, storytelling, and inspiration. Explore my work, services, and journey as a writer, journalist, and creative strategist.
        </p>
     </div>
     </div>

<div className="title2">
  <h2>Services <span> We Offer</span></h2>
</div>



<div className="wiz">
        <div className="card">
          <img src={pic7} alt="Film Making" />
          <h2>Film Production</h2>
          <p>
            Our film Production services bring your stories to life with professional cinematography, creative direction, and high-quality production.
          </p>
        </div>

        <div className="card">
          <img src={pic6} alt="podcast" />
          <h2>Podcast</h2>
          <p>
          Our podcast series delves into a variety of topics, from personal development and creative strategies.
          </p>
        </div>

        <div className="card">
          <img src={pic8} alt="Photography" />
          <h2>Photography</h2>
          <p>
            From portraits and events to commercial shoots, we provide high-quality images that tell your story.
          </p>
        </div>


        <div className="card">
          <img src={pic9} alt="Videography" />
          <h2>Videography</h2>
          <p>
            Our videography services capture your moments with precision and creativity.
          </p>
        </div>
        <div className="card">
          <img src={pic10} alt="photo lab" />
          <h2>Photo Lab</h2>
          <p>
          Our photo lab services provide high-quality photo printing, editing, and restoration.
          </p>
        </div>
        <div className="card">
          <img src={pic11} alt="content writing" />
          <h2>Content writing</h2>
          <p>
          Engaging and well-researched articles, blogs, and website content tailored to your audience.
          </p>
        </div>
      </div>


     {/* working */}
     <div className="container">
        <div class="disk">
            <h2>HOW DO WE <span>WORK?</span></h2>
        </div>
        
        <div className="conti">
            <div className="content-box">
                <div class="box">
                    <i className="fa-solid fa-bahai"></i>
                    <h3>Briefing</h3>
                    <div className="dot">
                        <div className="circle"></div>
                    </div>
                    <p className="home">
                        Summary of information or instruction given before a project.
                    </p>
                </div>
                
                <div className="box">
                    <i className="fa-solid fa-lightbulb"></i>
                    <h3>Idea</h3>
                    <div className="dot">
                        <div class="circle"></div>
                    </div>
                    <p classNamelassName="home">
                        Generated through brainstorming, research and observation.
                    </p>
                </div>
                
                <div className="box">
                    <i className="fa-solid fa-gears"></i>
                    <h3>Processing</h3>
                    <div className="dot">
                        <div className="circle"></div>
                    </div>
                    <p className="home">
                        Set of actions that transform inputs into designed outputs requiring planning.
                    </p>
                </div>
                
                <div className="box">
                    <i className="fa-solid fa-flag-checkered"></i>
                    <h3>Finishing</h3>
                    <div className="dot">
                        <div className="circle"></div>
                    </div>
                    <p className="home">
                        Final stage of a process where the product outcome is completed.
                    </p>
                </div>
            </div>
        </div>
    </div>


    
<section className="skills-section">
        <div className="skills-container">
          <div className="skills-title">
            <h2>Our Professional <span>Skills</span></h2>
            <p>Expertise developed through years of creative practice and professional experience</p>
          </div>

          <div className="skills-grid">
            {/* Photography Skill */}
            <div className="skill-card">
              <div className="skill-icon">
                
                <h3 className="skill-name">Photography</h3>
              </div>
              <p className="skill-description">
                Expert in capturing moments with precision, specializing in portrait, landscape, and event photography with a unique artistic vision.
              </p>
              <div className="skill-level">
           
              </div>
              <div className="skills-highlights">
                <span className="skill-tag"><a href="Composition">Composition</a></span>
                <span className="skill-tag"><a href="Lighting">Lighting</a></span>
                <span className="skill-tag"><a href="Portrait">potrait</a></span>
                <span className="skill-tag"><a href="Adobe Lightroom">Adobe Lightroom</a></span>
              </div>
            </div>

            {/* Videography Skill */}
            <div className="skill-card">
              <div className="skill-icon">
                <h3 className="skill-name">Videography</h3>
              </div>
              <p className="skill-description">
                Creating compelling visual stories through expert camerawork, shot composition, and post-production techniques for various formats.
              </p>
              <div className="skill-level">
             
              </div>
              <div className="skills-highlights">
                <span className="skill-tag"><a href="Cinematography">Cinematography</a></span>
                <span className="skill-tag"><a href="Color Grading">Color Grading</a></span>
                <span className="skill-tag"><a href="Premiere Pro">Premiere Pro</a></span>
              </div>
            </div>

            {/* Podcast Production */}
            <div className="skill-card">
              <div className="skill-icon">
                <h3 className="skill-name">Podcast Production</h3>
              </div>
              <p className="skill-description">
                Full-service podcast creation including concept development, recording, editing, and distribution strategies to reach target audiences.
              </p>
              <div className="skill-level">
              
              </div>
              <div className="skills-highlights">
                <span className="skill-tag"><a href="Audio Editing">Audio Editing</a></span>
                <span className="skill-tag"><a href="Interviewing">Interviewing</a></span>
                <span className="skill-tag"><a href="Scriptwriting">Scripting</a></span>
              </div>
            </div>

            {/* Content Writing */}
            <div className="skill-card">
              <div className="skill-icon">
                
                <h3 className="skill-name">Content Writing</h3>
              </div>
              <p className="skill-description">
                Crafting engaging, SEO-optimized content across various formats including blogs, articles, website copy, and social media posts.
              </p>
              <div className="skill-level">
                
              </div>
              <div className="skills-highlights">
                <span className="skill-tag"><a href="SEO">SEO</a></span>
                <span className="skill-tag"><a href="Copywriting">Copywriting</a></span>
                <span className="skill-tag"><a href="Research">Research</a></span>
              </div>
            </div>

            {/* Photo Editing */}
            <div className="skill-card">
              <div className="skill-icon">
               
                <h3 className="skill-name">Photo Editing</h3>
              </div>
              <p className="skill-description">
                Professional photo manipulation, color correction, retouching, and restoration to transform ordinary images into extraordinary visuals.
              </p>
              <div className="skill-level">
                
              </div>
              <div className="skills-highlights">
                <span className="skill-tag"><a href="Photoshop">Photoshop</a></span>
                <span className="skill-tag"><a href="Retouching">Retouching</a></span>
                <span className="skill-tag"><a href="Color Theory">Color Theory</a></span>
                <span className="skill-tag"><a href="Compositing">Compositing</a></span>
              </div>
            </div>

            {/* Web Design */}
            <div className="skill-card">
              <div className="skill-icon">
               
                <h3 className="skill-name">Web Design</h3>
              </div>
              <p className="skill-description">
                Creating visually appealing, user-friendly websites that effectively communicate brand messages and optimize user experience.
              </p>
              <div className="skill-level">
               
              </div>
              <div className="skills-highlights">
                <span className="skill-tag"><a href="HTML/CSS">HTML/CSS</a></span>
                <span className="skill-tag"><a href="UI/UX">UI/UX</a></span>
                <span className="skill-tag"><a href="Responsive Design">Responsive Design</a></span>
                <span className="skill-tag"><a href="WordPress">WordPress</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Testimonial 1 */}
    <div class="title2">
            <h2>What do client say <span>About Us?</span></h2>
        </div>

    <div className="cardS-container">
 
  
  <div className="cardS">
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="star"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    <div className="infos">
      <div className="hello">
      <img src={pic1}/>
      </div>
      <p className="description">
       We received expert podcast production and editing support. The final result was polished and engaging, helping us connect with our audience more effectively.
      </p>
    </div>
    <div className="author">— MATHEW ADAJI —</div>
  </div>

  {/* Testimonial 2 */}
  <div className="cardS">
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="star"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    <div className="infos">
      <div className="hello">
      <img src={pic1}/>
      </div>
      <p className="description">
        Their photography services captured our event perfectly. The images were vibrant, emotional, and beautifully edited, making our company stand out.
      </p>
    </div>
    <div className="author">— NJOKI —</div>
  </div>

  {/* Testimonial 3 */}

  <div className="cardS">
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="star"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    <div className="infos">
      <div className="hello">
      <img src={pic1}/>
      </div>
      <p className="description">
        The team delivered outstanding video content for our campaign—creative, professional, and always on time. Highly recommended for any business looking to elevate their brand.
      </p>
    </div>
    <div className="author">— JOHN DOE —</div>
  </div>
</div>


{/* footer */}
 <div className="footer-container">
        <div className="footer-column">
          <h3><i className="fas fa-store"></i> Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3><i className="fas fa-share-alt"></i> Socials</h3>
          <ul className="social-links">
            <li><i className="fab fa-youtube"></i> <a href="#">Youtube</a></li>
            <li>
              <i className="fab fa-facebook-f"></i> <a href="#">Facebook</a>
            </li>
            <li>
              <i className="fab fa-instagram"></i> <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3><i className="fas fa-paper-plane"></i> CONTACT</h3>
          <p>example@gmail.com</p>
        </div>

        <div className="foot-logo">
          <img src={logo192} alt="Logo" />
        </div>
      </div>
       
  </div>
    
  )
}

export default Home;