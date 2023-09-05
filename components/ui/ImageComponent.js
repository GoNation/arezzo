import React from 'react';

const ImageComponent = ({ cloudinaryId, description, reversed, styles }) => (
  <div className={`${styles.containerStyle} h-96`}>
    <div
      className={`${styles.relativeContainerStyle} ${
        reversed ? 'order-2' : ''
      } flex`}
    >
      <img
        src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
        alt={description}
        className={`${styles.imageStyle} !h-full object-contain`}
      />
    </div>
  </div>
);

export default ImageComponent;
