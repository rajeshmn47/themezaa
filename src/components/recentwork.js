import {useState,useEffect} from 'react'


export const Recentwork=()=>{

const[index,setIndex]=useState(0)
useEffect(()=>{
setInterval(() => {
    setIndex(index+1)
}, 1000);
},[])
    return(
        <>
        <div className="recentwork">
            <h5>checkout our most recent work</h5>
    
  <div><img src='https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg'/>  </div>
<div> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2019/12/hongo.jpg'/>  </div>
<div><img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/pofo.jpg'/></div>
<div><img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-1.jpg"/> </div>
<div> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-2.jpg"/> </div>
<div> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-3.jpg'/> </div>
<div> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-4.jpg'/> </div>
<div> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-5.jpg"/> </div>
<div> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-6.jpg"/> </div>
<div> <img src='https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-7.jpg'/> </div>
<div> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2017/02/theme-slider-8.jpg"/> </div>
<div> <img src="https://themezaa.b-cdn.net/wp-content/uploads/2022/04/litho.jpg"/> </div>
      
          </div>
        </>
    )
}

export default Recentwork