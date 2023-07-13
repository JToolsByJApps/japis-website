import React from 'react';

const apis = [
  {
    name: 'API 1',
    url: 'https://api.example.com/api1',
  },
  {
    name: 'API 2',
    url: 'https://api.example.com/api2',
  },
  // Agrega más objetos de API según sea necesario
];

const JApis = () => {
  return (
    <div>
      <h1>JApis - Conjunto de APIs</h1>
      <ul>
        {apis.map(api => (
          <li key={api.name}>
            <a href={api.url}>{api.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JApis;
  
