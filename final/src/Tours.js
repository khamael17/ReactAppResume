import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour,togle }) => {
  return (
    <section>
     
      <div className= {togle?"sectionList":"main1"}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
