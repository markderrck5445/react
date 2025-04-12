import React from 'react'
import pic51 from '../img/pic51.jpg';
import pic7 from '../img/pic7.jpg';
import pic8 from '../img/pic8.jpg';
import pic9 from '../img/pic9.jpg';
const Home=()=> {
  return (
    <div>
      <div className="container-con">
     <div className="col-1">
        <h1 className="shilla">
       <span> I am </span>
        </h1>

        <p>
        Welcome to my official website, a hub dedicated to creativity, storytelling, and personal growth. , and I am a writer, journalist, and creative strategist with a passion for exploring the power of words.
        This platform serves as a space where I share my original poetry, thought-provoking articles, and insights into Creative Voice Mastery, a framework designed to help individuals unlock their full creative potential.
        </p>
     </div>
     </div>

     <div className="heritage">
  <img src={pic51} alt="Heritage" className="small-image" />
</div>


<div className="title2">
  <h2>Services <span> i Offer</span></h2>
</div>



<div className="wiz">
        <div className="card">
          <img src={pic7} alt="Film Making" />
          <h2>Film Making</h2>
          <p>
            Our film making services bring your stories to life with professional cinematography, creative direction, and high-quality production.
          </p>
        </div>

        <div className="card">
          <img src={pic7} alt="Film Making" />
          <h2>Film Making</h2>
          <p>
            Our film making services bring your stories to life with professional cinematography, creative direction, and high-quality production.
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
      </div>

       
  </div>
    
  )
}

export default Home;