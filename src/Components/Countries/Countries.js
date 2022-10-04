import React from 'react';
import './Countries.css';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
  const countries = useLoaderData();

  return (
    <div>
      <h2>All Countries: {countries.length}</h2>
      <div className="countries-container">
        {countries.map((country, index) => (
          <Country key={index} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
