export const Slide=({r,index,setIndex})=>{
    console.log(r)
const handleclick=(r)=>{
    console.log(r,'rajesh')
    setIndex(r)
}
    return(
        <>
        <div className={index===r?'selectedslide':'slide'} onClick={()=>handleclick(r)}>

</div>
        </>
    )
}
export default Slide