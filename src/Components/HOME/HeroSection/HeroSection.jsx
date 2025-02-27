import { useEffect, useState } from "react";
import "../HeroSection/herosection.css";

const images = [
  "/assets/images/01.jpeg.jpg",
  "/assets/images/02.jpeg.jpg",
  "/assets/images/04.jpeg.jpg",
 ];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`hero-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      <button className="prev-button" onClick={prevImage}>
        ‹
      </button>

      <button className="next-button" onClick={nextImage}>
        ›
      </button>
    </div>
  );
};

export default HeroSection;












// import { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./heroSection.css";

// const images = [
//   "/assets/images/01.jpeg.jpg",
//   "/assets/images/02.jpeg.jpg",
//   "/assets/images/04.jpeg.jpg",
//   "/assets/images/05.jpeg.jpg",
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="hero-section">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Hero ${index + 1}`}
//           className={`hero-image ${index === currentIndex ? "active" : ""}`}
//         />
//       ))}

//       <button className="prev-button" onClick={prevImage}>
//         <FaArrowLeft />
//       </button>

//       <button className="next-button" onClick={nextImage}>
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// export default HeroSection;
