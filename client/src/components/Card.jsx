import { React } from 'react';
import { Link } from 'react-router-dom';
import '../modules/Card.css';




export default function Card({name, image, id}){

    return (
        <div className='card'>
            <h4 className='nombre'>Cocktail:{name}</h4>
            <img src={image} alt="image not found" width='400px' height='400px'/> 
            <Link to= {'/home/' + id}><button className='detalle'>SPECS</button> </Link>
           
        </div>
      
    )
};