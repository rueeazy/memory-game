import React, { useState } from 'react';

export default function Navbar(props) {
  return (
    <div className="header">
        <div className="navbar">
            <div className="gameTitle">Memory Game</div>
            <div className="scores">
                <div className="currentScore">Score: 0</div>
                <div className="highScore">Highest Score: 3</div>
            </div>
        </div>
    </div>
  );
}