import React from "react";
import { TbLetterT } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
const Home = () => {
  return (
    <div className='home'>
        <nav className='container --flex-between'>
            <div className='logo'>
                <TbLetterT size={35} />
            </div>
            <ul className="home-links">
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <button className='--btn-primary'>
                        <Link to='/login'>Login</Link>
                    </button>
                </li>
                <li>
                    <button className='--btn-primary'>
                        <Link to='/dashboard'>Dashboard</Link>
                    </button>
                </li>
            </ul>
        </nav>
        {/* {HERO SECTION} */}
        <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Get started now</Link>
            </button>
          </div>

        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
    
  )
}

export default Home