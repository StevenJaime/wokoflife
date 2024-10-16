import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography} from '@mui/material';
import { fetchFromApi } from '../utils/fetchFromApi';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



const MealDetail = () => {
   const { id } = useParams();
   const [ recipe, setRecipe ] = useState(id);
   

useEffect(() => {
    fetchFromApi(id)
    .then((data) => setRecipe(data))
  },[id])
 
  if(!recipe?.ingredients) return 'loading...';

  const { title, difficulty, portion, time, ingredients, description, method, image } = recipe;

  return (
    <Box component='main' sx={{ margin:'0 auto',width:{xs:'96%' , md: '90%'}, maxWidth:'1440px'}} >
       
       
        <Box className='main-top-content' display='flex' flexDirection='column' justifyContent='space-between' sx={{marginTop:{xs:'0px', md:'32px'}}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column-reverse', md:'row'},alignItems:{xs:'none',sm:'center',md:'none' } ,justifyContent:'space-between'}} >
                <Box sx={{width:{xs:'100%', md:'45%'}}}  display='flex' flexDirection='column' justifyContent='center' >
                        <Typography sx={{marginTop: {xs:'32px',md:'0px'}}} variant='h1' fontFamily='Patrick Hand SC,cursive' fontSize='4em'  textAlign='center'>{title}</Typography>
                        <Typography sx={{marginTop: {xs:'32px',md:'40px'}}} fontSize='18px' textAlign='center'>{description}</Typography> 
                </Box>

                <Box  sx={{display:'flex', alignItems:'center', justifyContent:'center',width:{xs:'100%',sm:'50%' ,md:'45%'}, marginTop:{xs:'0px', sm:'32px', md:'0px'}}}  height='400px' overflow='hidden'>
                    <img width='100%' style={{alignSelf:'center'}} src={image} /> 
                </Box>    
                
            </Box>
                
                
                <Box className='cooking-details' sx={{flexDirection:{xs:'column', sm:'row'}}} display='flex' justifyContent='space-between' my='32px'>
                
                    <Box className='ingredients' sx={{width:{xs:'100%', sm:'45%'}}}>
                        <Typography variant='h2' fontSize='2.5em' fontFamily='Patrick Hand SC,cursive' sx={{textAlign:{xs:'center', sm:'none'}}}>Ingredients</Typography>
                        {ingredients.map((item,idx) => (
                        <Box key={idx} display='flex' my={3} >
                            <CheckCircleOutlineIcon style={{marginRight:'10px', color:'red'}}/>
                            <Typography fontSize='18px'>{item}</Typography>
                        </Box>
                    ))}
                    </Box>

                    <Box className='instructions' sx={{width:{xs:'100%', sm:'45%'}}}>
                        <Typography variant='h2' fontSize='2.5em'fontFamily='Patrick Hand SC,cursive' sx={{textAlign:{xs:'center', sm:'none'}, marginTop:{xs:'16px', sm:'0px'}}}>Instructions</Typography>
                       {method.map((item, idx) => (
                        Object.values(item).map((item, index) => (
                            <Box key={index}>
                                <ol style={{padding:'0'}} >
                                    <span style={{color:'black', fontSize:'2em', fontWeight:'bold'}} >{idx + 1}</span>
                                    <Typography  fontSize='16px' mt='12px' >{item}</Typography>
                                </ol>
                            </Box>
                        ))
                       ))}
                    </Box>

                </Box>
            
        </Box>
        
        
    </Box>
  )
}

export default MealDetail