import React from 'react';

export default function Navbar(props) {
  return (
    <div className="header">
        <div className="navbar">
            <div className="gameTitle">Memory Game</div>
            <div className="scores">
                <div className="currentScore">Score: {props.score}</div>
                <div className="highScore">High Score: {props.highScore}</div>
            </div>
        </div>
    </div>
  );
}