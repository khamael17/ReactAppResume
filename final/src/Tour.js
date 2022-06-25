import React, { useState } from 'react';
import Like from './Like';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const pe={}
  return (
   
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  Expand'}
          </button>
        </p>
         
        <Like/>
</footer>
    </article>
    
  );
};

export default Tour;
