import Navbar from './navbar'


export const Firstslide=()=>{
    return(
        <>
        <div className="toppage">
<Navbar/>
<div className='firstleftpage'>
<div className='details'>
    <h1>litho</h1>
    <h2>creative and multipurpose elementor wordpress theme</h2>
    <p>Litho is a creative and responsive, business and portfolio, 
    blog and eCommerce multipurpose Elementor WordPress theme
     with 37+ homepages, 200+ elements and inner pages.</p>
    <div>
<button className='demo'>awesome demos</button>
<button className='demo'>purchase theme</button>
</div>
</div>
</div>
<div className='rightpage'>
<img src='https://themezaa.b-cdn.net/wp-content/uploads/2021/01/home-litho-banner-1000x673.png' alt='' width='1200'/>
</div>
        </div>
        </>
    )
}

export default Firstslide