import React from 'react';

// Assuming "items" is the JSON data you provided
const items = {
  "bootstrap": [
    {
      "id": 1,
      "title": "Photography",
      "body": "Bootstrap Carousel Example",
      "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/v1586799813/kizmelvin/persons_pigeon_nurkq2.jpg",
      "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
    },
    // Add the rest of your items here
  ]
};

const BootstrapCarousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {items.bootstrap.map((item, index) => (
          <li key={item.id} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {items.bootstrap.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img className="d-block w-100" src={item.imageUrl} alt={item.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default BootstrapCarousel;