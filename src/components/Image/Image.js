import React, { useState, forwardRef } from "react";
import noImage from '../../assets/Images/no-image.png'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={className}
      ref={ref}
      src={fallback || (src ? src: fallback)}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
