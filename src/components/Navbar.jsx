import React from 'react';
import { Box, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import logo from '../images/logo.png'

const Navbar = ({searchFilter, setSearchFilter}) => {
  return (
    <Box sx={{ margin:'0 auto',width:{xs:'96%' , md: '90%'},maxWidth:'1440px'}}> 
        <Stack component='header' direction={{xs:'column', md:'row'}} justifyContent='space-between' alignItems={{xs:'center', md:'flex-end'}} py={2}>
            <Link to='/'><img src={logo} height='100px' /></Link>
            <Searchbar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        </Stack>
    </Box>
  )
}

export default Navbar