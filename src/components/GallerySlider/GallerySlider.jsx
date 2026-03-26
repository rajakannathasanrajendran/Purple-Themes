import React, { useRef, useState } from "react";
import "./GallerySlider.css";

import img2 from "../../assets/images/gallery/g2.jpg";
import img3 from "../../assets/images/gallery/g3.jpg";
import img4 from "../../assets/images/gallery/g4.jpg";
import img5 from "../../assets/images/gallery/g5.jpg";
import img6 from "../../assets/images/gallery/g6.jpg";
import img7 from "../../assets/images/gallery/g7.jpg";
import img8 from "../../assets/images/gallery/g8.jpg";
import img9 from "../../assets/images/gallery/g9.jpg";
import img10 from "../../assets/images/gallery/g10.jpg";
import img11 from "../../assets/images/gallery/g11.jpg";
import img12 from "../../assets/images/gallery/g12.jpg";
import img13 from "../../assets/images/gallery/g13.jpg";
import img14 from "../../assets/images/gallery/g14.jpg";
import img15 from "../../assets/images/gallery/g15.jpg";
import img16 from "../../assets/images/gallery/g16.jpg";
import img17 from "../../assets/images/gallery/g17.jpg";
import img18 from "../../assets/images/gallery/g18.jpg";
import img19 from "../../assets/images/gallery/g19.jpg";
import img20 from "../../assets/images/gallery/g20.jpg";
import img21 from "../../assets/images/gallery/g21.jpg";
import img22 from "../../assets/images/gallery/g22.jpg";

const images = [
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
];


const GallerySlider = () => {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      galleryRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">A Feast for the Eyes</h2>
      <h6 className="section-subtitle mb-3">Explore snapshots of our dishes, events, and the passion behind every plate</h6>

      <div className="container">
        <div className="gallery-container" ref={galleryRef}>
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => openModal(src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySlider;
