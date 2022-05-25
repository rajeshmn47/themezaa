import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import CodeIcon from '@mui/icons-material/Code';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Services=()=>{

    return(
<>
<div className="services">
<button className='explore'>explore all themes</button>
<div className='service'>
    <h2>10</h2>
    <h4>/</h4>
    <h5>Years of experience</h5>
</div>
<div className='service'>
    <h2>40</h2>
    <h4>/</h4>
    <h5>intelligent team members</h5>
</div>
<div className='service'>
    <h2>20</h2>
    <h4>/</h4>
    <h5>incredible items</h5>
</div>
<div className='service'>
    <h2>41034</h2>
    <h4>/</h4>
    <h5>happy customers</h5>
</div>
</div>
<div className="bottomservices">
<h2>OUR SERVICES</h2>
<h5>
ThеmеZаа offers a full rаngе оf web design & development ѕеrvісеѕ tо 
еxсееd thе dеmаndѕ оf any ѕіzе project and help 
you get ѕеt uр fоr success.
</h5>
<div className='availableservices'>
    <div className="available">
    <ArchitectureOutlinedIcon style={{fontSize:'4vw',color:'#DADADA',fontWeight:'100'}}/>

<div className='icon'>
<h2>Web design</h2>
<h5>
We deliver creative designs and a great user experience, which inspires your visitors to explore your website in depth.
</h5>
</div>
</div>
<div className="available">
    <CodeIcon style={{fontSize:'4vw',color:'#DADADA',fontWeight:'100'}}/>

<div className='icon'>
<h2>Web development</h2>
<h5>

We provide a wide variety of website development services to make your website feature-rich and as per your custom requirements.


</h5>
</div>
</div>
<div className="available">
    <TableRowsOutlinedIcon style={{fontSize:'4vw',color:'#DADADA',fontWeight:'100'}}/>

<div className='icon'>
<h2>HTML5 / CSS3</h2>
<h5>

HTML5, CSS3 and Bootstrap responsive framework are the foundation of all our web design projects to make it W3C compliance.
</h5>
</div>
</div>
<div className="available">
    <WebhookOutlinedIcon style={{fontSize:'4vw',color:'#DADADA',fontWeight:'100'}}/>

<div className='icon'>
<h2>WordPress development</h2>
<h5>

WordPress is the best free and open source framework to develop any kind of website, you can experience it using our WordPress themes.
</h5>
</div>
</div>
<div className="available">
    <AnimationOutlinedIcon style={{fontSize:'4vw',color:'#DADADA',fontWeight:'100'}}/>

<div className='icon'>
<h2>Magento development</h2>
<h5>

We develop powerful custom-built Magento eCommerce themes, which attract your visitors and increase the conversions & revenue.
</h5>
</div>
</div>
<div className="available">
    <SettingsOutlinedIcon style={{fontSize:'4vw',color:'#DADADA',fontWeight:'100'}}/>

<div className='icon'>
<h2>Theme / Plugin customisation</h2>
<h5>

Our specialists can customize your WordPress / Magento theme or plugin code to add / change features as per your requirement.


</h5>
</div>
</div>
</div>
</div>
</>

    )
}

export default Services
