import React, {useEffect} from 'react';
import Meal from './Meal';
import { useParams } from 'react-router-dom';



import { Box, Typography} from '@mui/material';

const MealsPage = ({meals, searchMeals, setSearchMeals, searchFilter}) => {




  useEffect(() => {
    
    setSearchMeals(meals.filter(f => f.title.toLowerCase().includes(searchFilter))) //filter through the data with only selections with search
     console.log('rendering')
  },[searchFilter])


/* fix this ^^^ to filter through data within a state so it doesnt keep making api calls)*/

  return (
    <Box sx={{ margin:'0 auto',width:{xs:'96%' , md: '90%'}, maxWidth:'1440px'}}>
      <Typography variant='h2' textAlign='center' py={4}> Search Results For: {searchFilter} </Typography>
      <Box component='section' marginBottom='10%' display='flex' flexDirection='row' justifyContent='space-between' rowGap='50px' flexWrap='wrap' >
        <Meal meals={searchMeals}/>
      </Box>
    </Box>
  )
}

export default MealsPage