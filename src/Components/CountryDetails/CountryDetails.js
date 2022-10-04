import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Countries from '../Countries/Countries';
import './CountryDetails.css';

const CountryDetails = () => {
  const country = useLoaderData()[0];
  console.log(country);
  const {
    name: { common },
    flags: { png },
    population,
    independent,
    region,
    capital,
    unMember,
  } = country;

  return (
    <div className="country-details-container">
      <h1>Country Details</h1>
      <Link className="btn-back" to="/" element={<Countries></Countries>}>
        Back
      </Link>
      <div className="country-details">
        <img src={png} alt="" />
        <div className="country-info">
          <h3>Name: {common}</h3>
          <h4>Capital: {capital[0]}</h4>
          <h4>Region: {region}</h4>
          <h4>Population: {population}</h4>
          <h4>Independent: {independent ? 'true' : 'false'}</h4>
          <h4>UN Member: {unMember ? 'true' : 'false'}</h4>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
