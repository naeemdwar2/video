import React from 'react'
import "./Videosection.css"
import rafa4 from "../../../assets/video-frame.jpg"
export default function Videosection() {
  return (
    <div>
          <div className="video-section">
            <div className="video-view">
              <h6>| Video View</h6>
              <h2>Get Closer View &amp;<br/> Different Feeling</h2>
            </div>
    </div>
    <div className="video-youtube">
        <div className="video-messi">
           <img src={rafa4} alt="" />
           <a href="https://www.youtube.com/watch?v=ytJEc2vEXjM">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z"></path><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5Z"></path></svg>

           </a>


        </div>
</div>
    </div>
  )
}
