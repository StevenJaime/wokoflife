import React, {useState, useEffect} from 'react';
import { Box, Typography} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import HeroImage  from '../images/hero-image.jpg';
import Button from '@mui/material/Button';
import { Meal} from './comp_index';
import { Link } from 'react-router-dom';


const Hero = ({meals}) => {
  
  const currentPage = 0;
  const[ nextPage, setNextPage] = useState(16);
  const [loading, setLoading] = useState(true)
  const randomize = (Math.floor(Math.random() * meals.length));


  const handleScroll = () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setLoading(true)
      
      setNextPage((prev) => prev + 16)
    }
  }


  
  useEffect(() => {
    setLoading(false)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  
  return (
    <>
       <Box sx={{ margin:'0 auto',width:{xs:'96%' , md: '90%'}, maxWidth:'1440px'}}>
        <Box component='main' sx={{ 
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          height:'80vh', 
          backgroundImage:`url(${HeroImage})`, 
          backgroundRepeat:'no-repeat', 
          backgroundSize:'cover', 
          backgroundPosition:'center'}}
        > 
        <Box sx={{display:'flex', flexDirection:'column', color:'white' ,width:'80%'}}>
          <Typography variant='h1'  sx={{fontSize:{xs:'60px', md:'72px'}, textAlign:{xs:'center', sm:'left'}}} >Try Our <br/> Recipe <br/> Of The Day</Typography>
          <Box className='spacer' height='5vh' />
          <Link to={`/Meal/Recipe/${randomize}`}>
              <Button sx={{fontFamily:'Patrick Hand SC,cursive',backgroundColor:'#e00000', ':hover':{backgroundColor:'#b10101'}, color:'white', width:{xs:'100%',sm:'25%', md:'25%'}}}>
                Lets Cook!
              </Button>
          </Link>
        </Box>
        </Box>
     
        <Typography variant='h2' fontSize='48px' fontFamily="Patrick Hand SC, cursive" textAlign='center' py={4}> RECIPES </Typography>


        <Box component='section' marginBottom='10%' display='flex' flexDirection='row' sx={{justifyContent:{ xs:'center' ,sm:'space-evenly', lg:'space-between'}}} rowGap='50px' flexWrap='wrap' >
         
          <Meal meals={meals} currentPage={currentPage} nextPage={nextPage} />
          
          <Box sx={{ width: '100%' }}>
            
          </Box>
        </Box>
       
      </Box>
    </>
  )
}

export default Hero