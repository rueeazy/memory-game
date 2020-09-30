import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import CardSection from './components/CardSection'
import characters from "./characters.json";
import './styles/reset.css'
import './styles/main.css'

function shuffleCards(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

function App() {
  const [celebrities, setCelebrities] = useState(() => shuffleCards(characters))
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function markClick(celeb) {
    if(celeb.clicked === true) {
      resetGame();
    } else {
      setCelebrities([...celebrities].map(object => {
        if(object.id === celeb.id) {
          incrementScore();
          return {
            ...object,
            clicked: true
          }
        }
        else return object;
      }))
    }
  }

  function incrementScore() {
    setScore(score + 1)
  }

  function resetGame() {
    setScore(0)
    setCelebrities(shuffleCards(characters))
  }

  useEffect(() => {
    setCelebrities(shuffleCards(celebrities.slice()))
    if(score > highScore) {
      setHighScore(score)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[score])


  return (
    <div className="container">
      <Navbar score={score} highScore={highScore}/>
      <Jumbotron />
      <CardSection celebrities={celebrities} markClick={markClick} />
    </div>
  );
}

export default App;
