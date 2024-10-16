import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button}  from '@mui/material';
import { Link } from 'react-router-dom';

const MealCard = ({ meal: { id, title, image} }) => {

  return (
    <Card sx={{ width: { md: '300px', xs: '100%'}, borderRadius:'25px'}}>
        <Link to={`/Meal/Recipe/${id}`}>
          <CardMedia 
            image={image} 
            alt={title} 
            sx={{ width: '300px', height: '180px' , padding:{md:'0'}}}
          />
          <CardContent sx={{backgroundColor:'white', width:'300px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'170px',padding:{xs:'2em', md:'2em'}}}>
            <Typography variant='h3' sx={{ width:'100%', height:'60px', overflow:'hidden', fontFamily:"Patrick Hand SC, cursive", fontSize:'24px', color:'black', textAlign:'center'}} >{title.length > 35 ? title.substring(0,35) + '...' : title }</Typography>
            <Button variant="contained" style={{backgroundColor:'#e00000',fontFamily:"Patrick Hand SC, cursive",fontSize:'16px', color:'white', padding:'5px', width:'50%' }}>Recipe</Button>    
          </CardContent>
        </Link>
    </Card>
  )
}

export default MealCard