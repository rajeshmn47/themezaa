import {useState,useEffect} from 'react'


export const Recentwork=()=>{

const[index,setIndex]=useState(0)
useEffect(()=>{
if(index>10){
    setIndex(0)
}
},[index])
useEffect(()=>{
var a=setInterval(() => {
    setIndex(index+1)
}, 1000);
return () => {
    clearInterval(a)
  };
},[index])
    return(
        <>
          {index}
        <div className="recentwork">
            <h5>checkout our most recent work</h5>
            <div className="recentworkslider">
  <div className={index===0?'activeslide':index-1===1?'prevslide':'okbro'}><img src='https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg'/>  </div>
<div className={index===1?'activeslide':index-1===1?'prevslide':'okbro'}> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2019/12/hongo.jpg'/>  </div>
<div className={index===2?'activeslide':index-1===1?'prevslide':'okbro'}><img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/pofo.jpg'/></div>
<div className={index===3?'activeslide':index-1===1?'prevslide':'okbro'}><img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-1.jpg"/> </div>
<div className={index===4?'activeslide':index-1===1?'prevslide':'okbro'} > <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-2.jpg"/> </div>
<div  className={index===5?'activeslide':index-1===1?'prevslide':'okbro'}> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-3.jpg'/> </div>
<div className={index===6?'activeslide':index-1===1?'prevslide':'okbro'}> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-4.jpg'/> </div>
<div className={index===7?'activeslide':index-1===1?'prevslide':'okbro'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-5.jpg"/> </div>
<div className={index===8?'activeslide':index-1===1?'prevslide':'okbro'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-6.jpg"/> </div>
<div className={index===9?'activeslide':index-1===1?'prevslide':'okbro'}> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-7.jpg'/> </div>
<div className={index===10?'activeslide':index-1===1?'prevslide':'okbro'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-8.jpg"/> </div>
<div className={index===11?'activeslide':index-1===1?'prevslide':'okbro'}> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg"/> </div>
</div>
          </div>
        </>
    )
}

export default Recentwork