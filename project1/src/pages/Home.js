import React from 'react'
import pic6 from '../img/pic6.jpg';
import pic7 from '../img/pic7.jpg';
import pic10 from '../img/pic10.jpg';
import pic8 from '../img/pic8.jpg';
import pic9 from '../img/pic9.jpg';
import pic11 from '../img/pic11.jpg';
import pic1 from '../img/pic1.jpg';
const Home=()=> {
  return (
    <div>
      <div className="container-con">
     <div className="col-1">
        <h1 className="shilla">
         I am  
       <span> 
        Belvin Mkoya
        </span> 
        </h1>

        <p>
        Welcome to my official website, a hub dedicated to creativity, storytelling, and personal growth. , and I am a writer, journalist, and creative strategist with a passion for exploring the power of words.
        This platform serves as a space where I share my original poetry, thought-provoking articles, and insights into Creative Voice Mastery, a framework designed to help individuals unlock their full creative potential.
        </p>
     </div>
     </div>

<div className="title2">
  <h2>Services <span> i Offer</span></h2>
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
            <h2>HOW DO I <span>WORK?</span></h2>
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
    
    <div className="cardS-container">
  {/* Testimonial 1 */}
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur.
      </p>
    </div>
    <div className="author">— MARKDERRICK NGUYAGWA —</div>
  </div>
</div>
       
  </div>
    
  )
}

export default Home;