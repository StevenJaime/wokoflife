import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, MealDetail, MealsPage } from './components/comp_index';
import { fetchFromApi } from './utils/fetchFromApi';

function App() {
  const[ meals, setMeals ] = useState([]);
  const[ searchMeals, setSearchMeals ] = useState(meals);
  const [ searchFilter, setSearchFilter] = useState('');
 console.log(searchFilter)

 useEffect(() => {
  fetchFromApi('')
  .then((data) => setMeals(data))
 console.log('fetching')
},[])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL} >    
       <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
       <Routes>
          <Route path='/' exact element={<Hero meals={meals} setMeals={setMeals} />} />
          <Route path='/Meal/Recipe/:id' element={<MealDetail />} />
          <Route path="/search/:type" element={<MealsPage meals={meals} searchMeals={searchMeals} setSearchMeals={setSearchMeals} searchFilter={searchFilter} />}/>
          <Route />
       </Routes>     
    </BrowserRouter>
  )
}

export default App
