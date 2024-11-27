import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./home.css"
import VideoSection from "../../components/video/videosection/Videosection";

export default function Home() {
  const [num, setNum] = useState(0);

  const [color , setColor] = useState("black");
  return (
    <div>
      <Navbar/>
      <VideoSection/>
      
      
    </div>
  )
}
