import React, { useState } from 'react';
import jsonData from './content/basic-terms-de.json';

function Card({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function CardsList() {
  const [data] = useState(jsonData);

  return (
    <div>
      <h1>Cards List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;