import React ,{ useEffect, useRef,useState } from 'react'
import ReactDOM from 'react-dom';
import './cards.css' 
import YouTubeIcon from '@material-ui/icons/YouTube'; 
import Footer from './footer'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import DuoIcon from '@material-ui/icons/Duo';
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';
import CancelIcon from '@material-ui/icons/Cancel';

// import Tilt from 'react-vanilla-tilt'
import VanillaTilt from 'vanilla-tilt';
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
    return <div ref={tilt} {...rest} />;
  }
  



function Cards() {const [modalopen,setmodalopen]=useState(false);
    let root=document.documentElement;
    window.addEventListener("scroll",()=>{
        console.log(window.scrollY)
        var h=window.innerHeight;
        if(window.scrollY>=(0.95*h))
        {
                root.style.setProperty('--dispar1','none')
                
        }
        else{
        
            root.style.setProperty('--dispar1','flex')
        }

    })

    const options = {
        scale: 1.2,
        speed: 500,
        max: 30,
        perspective:500
      };

// VanillaTilt.init(document.querySelectorAll(".card"),{
//     max:25,
//     speed:400
// });

// const element = document.querySelectorAll(".card");
// VanillaTilt.init(element);
// element.addEventListener("tiltChange", Cards);

    return (
        <div className="container" id="container">
            {(modalopen) ? <div className="modal__body" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"fixed",top:"0",height:"70%",width:"70%",background: "rgba(255, 255, 255, 0.1)",marginTop:"130px",zIndex:"99999999999",backdropFilter:"blur(25px)",opacity:"1",borderRadius:"10px",  boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",  borderTop: "1px solid rgba(255, 255, 255, 0.5)",
  borderLeft:"1px solid rgba(255, 255, 255, 0.5)"}}>
      <CancelIcon style={{color:"white",marginTop:"-50px",marginBottom:"40px",cursor:"pointer"}} onClick={()=>setmodalopen(false)}/>
<h1 style={{color:"black",fontFamily:"Poppins,sans-serif",marginTop:"-30px",marginBottom:"15px"}}>Hey, we are waiting too!</h1>
<BlurOnRoundedIcon className="bluricon" style={{color:"grey",width:"40%",height:"50%",marginBottom:"10px"}}/>
<h2 style={{color:"black",marginBottom:"-30px"}}>The Project Live Demos are yet to <span className="startbtn">START >>></span></h2>
        
      </div> : <h2 style={{color:"white"}}></h2>}
 
            <h2 className="whitetitle" id="whitetitle" style={{fontFamily:"Poppins,sans-serif"}}>Take a peek at our projects...</h2>
<div className="cardcon1"> 

 

 {/* const {options} = props; */}

 

  






{/* <Tilt options={{perspective:"200",speed:"1000" , max:50}}
style={{backdropFilter:"blur(5px)"}}
className="tilter"  style={{height:"330px"}}> */} 
<Tilt className="box" options={options} >
            <div className="card" id="card1" >
            
            <div className="proj1" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>
                <div className="content" > 
                  
                
                    <h1>01</h1>

                    <h2 className="x">Real time Handwritten digit recognition</h2>
                    
                    <a href="#" style={{}} onClick={()=>setmodalopen(!modalopen)}>Go to Live Demo!</a>

                    

                </div>
            </div>
            </Tilt>
          

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} >
                <div className="card" id="card2">

                <div className="proj2" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>
                <div className="content">
                    <h1>02</h1>
                    <h2>Object detection using Computer Vision</h2>
                    
                    <a href="#" onClick={()=>setmodalopen(!modalopen)}>Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} > 
            <div className="card" id="card3">

            <div className="proj3" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>
                <div className="content">
                    <h1>03</h1>
                    <h2>Bidirectional person counter using IR sensor</h2>
                    <p className="onelineintro">One Line intro</p>
                    <a href="#" onClick={()=>setmodalopen(!modalopen)}>Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}

            </div>
            
            
            <div className="cardcon2">
            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options}>
            <div className="card" id="card4">
            <div className="proj4" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>

                <div className="content">
                  <h1>04</h1>
                    <h2 style={{marginTop:"14px"}}>Temperature and Humidity measurement using DHT sensor </h2>
                    
                    <a href="#" style={{marginTop:"0px"}} onClick={()=>setmodalopen(!modalopen)}>Go to Live Demo!</a>

                </div>
                
            </div>
            </Tilt>
            
            
            {/* </Tilt> */}

            {/* <Tilt options={{perspective:500,speed:"500"}} className="tilter"  style={{height:"330px",paddingTop:"0px",top:"10px",backdropFilter:"blur(5px)"}}> */}
            <Tilt className="box" options={options} >
            <div className="card" id="card5">
            <div className="proj5" style={{ zIndex: "100000",width:"100%",height:"100%"}}></div>

                <div className="content">
                    <h1>05</h1>
                    <h2 style={{marginTop:"14px"}}>Detection of UID from nanotechnology based RFID tags </h2>
                    
                    <a href="#" style={{marginTop:"0px"}} onClick={()=>setmodalopen(!modalopen)}>Go to Live Demo!</a>

                </div>
            </div>
            </Tilt>
            {/* </Tilt> */}


            </div>
            {/* <ExpandMoreIcon className="arrowdown1" style={{color:"black",zoom:"3",bottom:"0",zIndex:"10000",marginTop:"10px",backgroundColor:"none"}} onClick={function(){
           document.getElementById("footer__body").scrollIntoView({behavior:"smooth"})}}/> */}
            <a className="livebtn" href="https://youtube.com" style={{display:"flex",flexDirection:"row",padding:"20px",backgroundColor:"red",textDecoration:"none",color:"white",fontFamily:"Poppins,sans-serif",marginTop:"70px",borderRadius:"20px",alignItems:"center",justifyContent:"center"}}><YouTubeIcon  className="yticon" style={{padding:"0px",marginTop:"0px",zoom:"1.2"}} onClick={()=>setmodalopen(true)}/>         Join our livestream on YouTube!</a>
            
            
            <Footer/>
        </div>
    )
}

export default Cards
