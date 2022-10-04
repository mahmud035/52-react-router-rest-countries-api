import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css';

const Country = ({ country }) => {
  // console.log(country);
  const {
    name: { common },
    flags: { png },
    population,
    independent,
  } = country;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/country/${common}`);
  };

  return (
    <div onClick={handleNavigate} className="country">
      <img src={png} alt="" />
      <div className="country-info">
        <h3>Name: {common}</h3>
        <h4>Population: {population}</h4>
        <h4>Independent: {independent ? 'true' : 'false'}</h4>
      </div>
    </div>
  );
};

export default Country;
