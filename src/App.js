import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import CardSection from './components/CardSection'
import characters from "./characters.json";
import './styles/reset.css'
import './styles/main.css'

function App() {
  const [celebrities, setCelebrities] = useState(characters)
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <CardSection celebrities={celebrities} />
    </div>
  );
}

export default App;
