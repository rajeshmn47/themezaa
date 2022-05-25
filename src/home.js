import Chooseus from './components/chooseus'
import Toppage from './components/toppage'
import Recentwork from './components/recentwork'
import Firstslide from './components/firstslide'
import Secondslide from './components/secondslide'
import Thirdslide from './components/thirdslide'
import Fourthslide from './components/fourthslide'
import Fifthslide from './components/fifthslide'
import Services from './components/services'
import { useState,useEffect } from 'react'
import themezaa from './images/themezaa.jpeg'
import './App.css'

export const Home=()=>{
const[slidecount,setSlidecount]=useState(0)
useEffect(()=>{
  if(slidecount>4){
      setSlidecount(0)
  }
  
  },[slidecount])
useEffect(()=>{
  var a=setInterval(() => {
      setSlidecount(slidecount+1)
  }, 2000);
  return () => {
      clearInterval(a)
    };
  },[slidecount])
const sliders=[<Firstslide/>,<Secondslide/>,<Thirdslide/>,<Fourthslide/>,<Fifthslide/>]
    return(
        <>
        
      {sliders.map((a,index)=>
      index===slidecount?a:null)}

      <Chooseus/>  
      <Recentwork/>
      <Services/>
  <div className='remaining'>

  </div>
        </>
    )
}

export default Home