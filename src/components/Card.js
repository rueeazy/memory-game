import React from 'react';

export default function Card(props) {
  return (
    <div className="card" onClick={() => props.markClick(props.celeb)}>
        <img className="img" alt={props.celeb.name} src={props.celeb.photo}/>
        <div className="name">{props.celeb.name}</div>
    </div>
  );
}