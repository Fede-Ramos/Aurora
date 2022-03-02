import { React } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail } from '../actions';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import '../modules/Detail.css';

export default function Detail(){
    const dispatch= useDispatch();
    const { id } = useParams();
    const loading = useSelector ((state) => state.loading);
    const myDrink= useSelector((state) => state.details);
   //console.log(id)

    useEffect(() => {
        dispatch(getDetail(id))
    }, []);

   return (
    <div className='detail'>   
      
         
    { 
        loading ? 
        ( <Spinner/> )
        : (
    myDrink ? 
     
     <div>
         <h2>Drink name: {myDrink[0]?.name}</h2>
         <img src={myDrink[0]?.image}/>
      <h4 className='tarjeta'>How to prepare: </h4>
      <div className= 'pasos' dangerouslySetInnerHTML={{ __html: myDrink[0]?.steps}}/> </div>   
      : <p>That drink doesn't even exist, are you drunk?</p>  
        
        )}
  
 <div> 
  <Link to= '/home'>
           <button className= 'elBoton'>Home</button>
   </Link>
   </div>  

</div>
   )
    
};