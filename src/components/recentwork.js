import {useState,useEffect} from 'react'
import Slide from './slides'

export const Recentwork=()=>{
const rajesh=[0,1,2,3,4,5,6,7,8,9,10,11]
const[index,setIndex]=useState(0)
useEffect(()=>{
if(index>10){
    setIndex(0)
}
},[index])
useEffect(()=>{
var a=setInterval(() => {
    setIndex(index+1)
}, 2000);
styletest(index)
return () => {
    clearInterval(a)
  };
},[index])

const styletest=(index)=>{
  console.log(index)
  let banner = document.getElementsByClassName('test')[1]
  console.log(banner)
  if(index>0){
  banner.style.cssText = 
  `transform:translateX(${-index*34.5}vw);transition: all 0.3s linear;`
  }
  if(index===0){
    banner.style.cssText = 
    `transform:translateX(${-index*5}%);`
    }
}
    return(
        <>
          {index}
        <div className="recentwork">
            <h5>checkout our most recent work</h5>
            <div className='test'>   
  <div  className={index===0?'activeslide':index-11===0?'nextslide':index-10===0?'nextnextslide':'none'}>
    <img src='https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg' width='400'/>  </div>
<div className={index===1?'activeslide':index+1===1?'nextslide':index-11===0?'nextnextslide':'none'} > <img src='https://themezaa.b-cdn.net/wp-content/uploads/2019/12/hongo.jpg' width='400'/>  </div>
<div  className={index===2?'activeslide':index+1===2?'nextslide':index+2===2?'nextnextslide':'none'}>
  <img   
  src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/pofo.jpg' width='400'/></div>
<div  className={index===3?'activeslide':index+1===3?'nextslide':index+2===3?'nextnextslide':'none'}><img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-1.jpg" width='400'/> </div>
<div  className={index===4?'activeslide':index+1===4?'nextslide':index+2===4?'nextnextslide':'none'} > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-2.jpg" width='400'/> </div>
<div  className={index===5?'activeslide':index+1===5?'nextslide':index+2===5?'nextnextslide':'none'} > <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-3.jpg' width='400'/> </div>
<div  className={index===6?'activeslide':index+1===6?'nextslide':index+2===6?'nextnextslide':'none'}> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-4.jpg' width='400'/> </div>
<div  className={index===7?'activeslide':index+1===7?'nextslide':index+2===7?'nextnextslide':'none'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-5.jpg" width='400'/> </div>
<div   className={index===8?'activeslide':index+1===8?'nextslide':index+2===8?'nextnextslide':'none'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-6.jpg" width='400'/> </div>
<div   className={index===9?'activeslide':index+1===9?'nextslide':index+2===9?'nextnextslide':'none'}> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-7.jpg' width='400'/> </div>
<div  className={index===10?'activeslide':index+1===10?'nextslide':index+2===10?'nextnextslide':'none'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-8.jpg" width='400'/> </div>
<div  className={index===11?'activeslide':index+2===11?'nextslide':index+2===11?'nextnextslide':'none'} > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg" width='400'/> </div>
</div> 
<div className='selectslide'>
{rajesh.map((r)=>
<Slide r={r} index={index} setIndex={setIndex}/>
)}
</div>

          </div>
          
   

<div className='test'>   
  <div>
    <img src='https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg' width='400'/>  </div>
<div > <img src='https://themezaa.b-cdn.net/wp-content/uploads/2019/12/hongo.jpg' width='400'/>  </div>
<div><img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/pofo.jpg' width='400'/></div>
<div ><img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-1.jpg" width='400'/> </div>
<div  > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-2.jpg" width='400'/> </div>
<div  > <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-3.jpg' width='400'/> </div>
<div > <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-4.jpg' width='400'/> </div>
<div > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-5.jpg" width='400'/> </div>
<div> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-6.jpg" width='400'/> </div>
<div > <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-7.jpg' width='400'/> </div>
<div > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-8.jpg" width='400'/> </div>
<div > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg" width='400'/> </div>
</div>    
        </>
    )
}

export default Recentwork