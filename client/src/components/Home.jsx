import { React } from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrinks } from '../actions';
import Card from './Card';
import '../modules/Home.css';
import '../modules/Card.css';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

export default function Home(){

    const dispatch= useDispatch();
    const allDrinks= useSelector((state) => state.drinks);
    const loading = useSelector ((state) => state.loading);

    useEffect(() => {
        dispatch(getDrinks())
    }, []);

    function handleClick(e){
        e.preventDefault();
        dispatch(getDrinks())
    };

    
    return (
        <div className= 'home'>
  
         <SearchBar/>
         <h1>All drinks, all drunks</h1>
         <div> <button className='botonCargar' onClick= {(e) => handleClick(e)}>Reload</button>  </div>
         {loading? (
        <Spinner/>)
       : (
         allDrinks?.map((e) => {
                   return (
                      <div>
                         
                   <Card name={e.name} 
                   image={e.image}/>
                    
                   </div>
                   
                   ) 
                   
               }) 
       )}
        </div>
    
       )
        
       
};