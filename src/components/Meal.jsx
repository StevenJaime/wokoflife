import React from 'react'
import { Box } from '@mui/material';
import { MealCard } from './comp_index';

const Meal = ({meals,currentPage, nextPage}) => {
  
  return (
    <>

    {meals.slice(currentPage, nextPage).map(( item, index) => {
        if(item.id){ 
      
          return (
            
            <Box key={index} display='flex' flexDirection='column' >
                {item.id && <MealCard meal={item} />} 
            </Box>
          )
        }
  })} 
    </>
  )
}

export default Meal