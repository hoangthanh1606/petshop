import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ListAnimal from "../Animals/Animals";
import "./Home.css";
import { login } from '../../services/fetchAPI';
import { useNavigate  } from "react-router-dom";
import Image from "../../components/Image/Image";

const Home = () => {
  const userInfo = localStorage.getItem("access_token");
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    await login();
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <>
      <Header handleLogin={handleLogin} handleLogout={handleLogout} userInfo={userInfo}/>
      {userInfo ? <ListAnimal /> : (
        <div className="home-container">
          <div className="home-image">
            <Image src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/0b030deb57855d64a86f47a6/s-min.jpg' alt='animal'></Image>
          </div>

          <div className="home-content">
            <h5 className="home-about">About Us</h5>
            <h1 className="home-title">A Pet Blog</h1>
            <p className="home-context">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...</p>
            <p className="home-made">Image from Stn Solution</p>
            <button type="button" className="home-btn">Learn More</button>
          </div>
        </div>
        )}
      <Footer />
    </>
  );
};

export default Home;
