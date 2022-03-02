import { React } from 'react';
import { Link } from 'react-router-dom';
import '../modules/LandingPage.css';

export default function LandingPage(){
    return (
        <div className= 'title'>
          <h1>Hey, welcome!</h1>
          <h1>come in...take a drink</h1>
          <h1>and join us</h1>
          <Link to= '/home'>
              <button className= 'boton'>HOME</button>
          </Link>

        </div>
    )
};
