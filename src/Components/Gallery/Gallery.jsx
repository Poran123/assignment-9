// src/components/PhotoGallery.js
import React from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs here
];

function PhotoGallery() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Photo Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={image} alt={`Image ${index}`} className="card-img-top" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;