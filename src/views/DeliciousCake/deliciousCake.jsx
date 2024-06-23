import React from 'react';
import './deliciousCake.css';

const CakeCard = ({ imageSrc, title, description }) => (
  <div className="cake-card">
    <img src={imageSrc} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const DeliciousCakePage = () => {
  const cakeData = [
    {
      imageSrc: 'cake1.jpg',
      title: 'Chocolate Dream',
      description: 'Rich, decadent chocolate cake with layers of ganache.',
    },
  ];

  return (
    <div className="cake-page">
      {cakeData.map((cake, index) => (
        <CakeCard
          key={index}
          imageSrc={cake.imageSrc}
          title={cake.title}
          description={cake.description}
        />
      ))}
    </div>
  );
};

export default DeliciousCakePage;
