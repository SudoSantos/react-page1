import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa6";
import './Home.css'
import Background from '../../assets/background2.jpg';

const Home = () => {
  return (
    <div className="Home">
        <div className="home-l">
            <div style={{display: 'flex', alignItems: 'center', gap: '7px', marginTop: '1rem'}}>
                <div><FaCircleNotch color='#d1b3b2'/></div>
                <div className='icon'>
                    <span>Base</span>
                    <span>Apparel</span>
                </div>
            </div>
            

            <div className="heading">
                <div>We're</div>
                <div>coming</div>
                <div>soon</div>
                <p>Hello fellow shoppers! We're currently building our new fashion store.
                   Add your email below to stay up-to-date with announcements and our launch deals
                </p>
            </div>

            <div className='email'>
                <input type="email" placeholder='Email Address' />
                <button><FaAngleRight color ="white"/></button>
            </div>
            
        </div>

        <div className="home-r">
            <img src={Background} alt="" />
        </div>
    </div>
  )
}

export default Home