import React from 'react';
import {Link} from 'react-router-dom';

const Featured = ({match}) => {

let name = `${match.params.name}`;
let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>

    <Link to="/">Home</Link>
    </div>
  );
}

export default Featured;
