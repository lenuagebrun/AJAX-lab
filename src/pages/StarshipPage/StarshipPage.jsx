import React from 'react';
import { Link } from 'react-router-dom';


const StarshipDetail = ({ location }) => {
  const starship = location.state;
  return (
        <div>
          <p>Name: {starship.name}</p><br />
          <p>Model: {starship.model}</p><br />
          <Link to='/'>RETURN</Link>
        </div>
  )
}

export default StarshipDetail;