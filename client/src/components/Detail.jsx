import { React } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail } from '../actions';
import { useParams } from 'react-router-dom';
import '../modules/Detail.css';

export default function Detail(){
    const dispatch= useDispatch();
    const { id } = useParams();
    const myDrink= useSelector((state) => state.details);

    useEffect(() => {
        dispatch(getDetail(id))
    }, []);

   return (
    <div className='detail'>   
      
         
    { myDrink ? 
     
     <div className='tarjeta'>
         <h2>{myDrink.name}</h2>
         <img src={myDrink.image}/>
         <h4>How to prepare:  <div dangerouslySetInnerHTML={{ __html: myDrink.steps }}/> </h4>
      </div>
      : <p>Drink not found</p>  
        
    } 
  
 <div> 
      
  
  <Link to= '/home'>
           <button>Home</button>
   </Link>
   </div>  

</div>
   )
    
};