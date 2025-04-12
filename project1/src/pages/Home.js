import React from 'react'
import pic51 from '../img/pic51.jpg'; // Adjust the path based on your folder structure
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
     
    </div>
    
  )
}

export default Home;