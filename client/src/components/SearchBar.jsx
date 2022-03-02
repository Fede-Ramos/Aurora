import { React } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNames } from '../actions';
import '../modules/SearchBar.css';

export default function SearchBar(){
    const dispatch= useDispatch();
    const [name, setName]= useState('');


    function handleSearchName(e){
    e.preventDefault();
    setName(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault(e);
        dispatch(getNames(name))
    };

    return (
        <div>
             <input type= 'text'
               placeholder= 'What do you wanna drink?'
               onChange= {(e) => handleSearchName(e)}
               className= 'search'
              />
              <button className= 'botoncito' type= 'submit' onClick= {(e) => handleSubmit(e)}>Search</button>
              
        </div>
    )
};