import React from 'react';
import Card from './Card';

export default function CardSection(props) {

  return (
    <div className="cardContainer">
      {props.celebrities.map(celeb => {
        return <Card key={celeb.id} celeb={celeb} markClick={props.markClick}/>
      })}
    </div>
  );
}