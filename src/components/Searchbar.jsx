import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({searchFilter, setSearchFilter}) => {
    const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchFilter){
        navigate(`/search/${searchFilter}`)
        
    }
  }

  return (
    <Paper component='form' onSubmit={handleSubmit}sx={{marginTop:{xs:'16px',md:'0px'},display:'flex',alignItems:'center',padding:'10px',width:{xs:'100%', md:'45%'}, borderRadius:'25px'}}>
            <input  placeholder="What are we cooking?"  style={{marginLeft:'10px',width:'100%', border:'none', outline:'none'}} onChange={(e)=>{setSearchFilter(e.target.value.toLowerCase())}} />
         <SearchIcon sx={{marginRight:'10px',transition:'transform .2s ease' ,':hover':{transform:'scale(1.2)'}}} onClick={handleSubmit}/>
    </Paper>
  )
}

export default Searchbar