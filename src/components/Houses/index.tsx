import React from 'react';
import { Container } from 'react-bootstrap';
import { House } from '../../types/house';
import './styles.css';

function HouseList(house: House) {
  const { address, photoURL, price, homeowner } = house;
  return (
    <Container className="houses-list">
      <div className="glass-panel">
        <p className="address-text ">{address}</p>
        <img src={photoURL} className="images" alt="house" />
        <p>
          Price: <span className="utils-bold">${price}</span>
        </p>
        <p>
          This house is owned by <span className="utils-bold">{homeowner}</span>
        </p>
      </div>
    </Container>
  );
}

export default HouseList;
