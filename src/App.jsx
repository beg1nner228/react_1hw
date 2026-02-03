import { useState } from 'react'
import './App.css'
import imgUrl from './porsche.jpg';

const myName = 'Oleksandr';
const favWebsite = {
  name: 'ETH Zurich',
  url: 'https://ethz.ch/en.html'
};
const a = 154625;
const b = 35422552;

const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];

const sumFunction = (x, y) => {
  return x + y;
}

function App() {
  return (<>
    <h1>{myName}</h1>
    <p>Ласкаво просимо до нашого сайту!</p>
    <img src={imgUrl} alt="Porsche 911" />
    <a href={favWebsite.url} className='myFavWebsiteLink'>My favorite website: {favWebsite.name}</a>
    <p className='resultOfSum'>Sum of {a} and {b} is {sumFunction(a, b)}</p>
    <ul>
      {colors.map((color, index) => (
        <li key={index} style={{ color: color }}>{color}</li>
      ))}
    </ul>
    </>
  )
}

export default App
