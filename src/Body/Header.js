
import React, { useEffect, useRef, useState } from "react";
import './Header.css';

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  // Array of slideshow images
  const images = [
    "https://resizing.flixster.com/nVoWwHlY1_BRLDjG4EHHnMEhsng=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/731/603/MommyDeadandDearest_Trailer1.jpg",
    "https://variety.com/wp-content/uploads/2022/08/House-of-Hammer.jpg?w=681&h=383&crop=1",
    "https://donttellnetflix.com/wp-content/uploads/2020/02/hIRLUvnXkv7ubp9SNM3QWznZaKm.jpg"
  ];

  // Effect to handle slideshow timeouts
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to transition to the next slide
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, images.length]);

  return (
    <div>
      <div className="banner">
        <div className="banner-slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              className={index === currentSlide ? "active" : ""}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <h1>Welcome to my website</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Docflix</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}



export default Header;
