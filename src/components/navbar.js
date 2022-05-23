import './home.css'
import TwitterIcon from '@mui/icons-material/Twitter';

export const Navbar=()=>{
    return(
        <>
        <nav>
        <ul>
<img src='https://themezaa.b-cdn.net/wp-content/uploads/2018/07/themezaa-white-@2x.png' alt='' width='140'/>

        </ul>
        <ul className='middlenav'>
            <li>
                About
            </li>
            <li>
                themes and plugins
            </li>
            <li>
                customization
            </li>
            <li>
                support
            </li>
            <li>
                blog
            </li>
            <li>
            contact
            </li>
        </ul>
        <ul className='rightnav'>
        <li>
            f
            </li>
            <li>
        <TwitterIcon style={{fontSize:'14px'}}/>    
            </li>
            <li>
        in    
            </li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar