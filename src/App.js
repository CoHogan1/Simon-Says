import './App.css';
import React, { useState, useEffect } from "react";

let playerOrder = [];
let gameOrder = [];
let index = 0;
let run = false;

function App() {
    let [score, setScore] = useState(0);
    let [flashGreen,  setFlashGreen]  = useState(false)
    let [flashRed,    setFlashRed]    = useState(false)
    let [flashYellow, setFlashYellow] = useState(false)
    let [flashBlue,   setFlashBlue]   = useState(false)

    const startRound = () => {
        if (run) return;
        run = true
        setScore(0)
        populateGameOrder()
        playPattern()
    }
    const endRound = () => {
        // update scoreboard.
        run = false;
        playerOrder = [];
        gameOrder = [];
        index = 0;
    }

    const playPattern = () => {
        let second = 1000; // => one second.
        let i = 0;

        let flashSequence = setInterval(()=> {
            console.log("interval started");
            if (i > index){ clearInterval(flashSequence) }
            let curr = gameOrder[i]
            animation[curr]()
            i++
        }, second);

        index === 0 ? index = 1: index = index;
        let endSequence = setTimeout(()=>{
            console.log('play pattern timeout success');
            clearInterval(flashSequence)
        }, second * index + 400);
    }

    const generateRandomColor = () => {
        let colors = ['red', 'blue', 'green' ,'yellow']
        return colors[Math.floor(Math.random() * 4)];
    };
    const populateGameOrder = () => {
        for (let i = 0; i < 20; i++){
            gameOrder.push(generateRandomColor())
        }
    }

    const addPlayerMove = (e) => {
        e.preventDefault()
        if (index > 20) endRound(); // may not need this.
        playerOrder.push(e.target.id)// pushes color name. ->'red
        animation[e.target.id]()
        // here
        // checkSequence()
    }

    const checkSequence = () => {
        console.log('checking sequence');
        for (let i = 0; i < index; i++){
            if (!playerOrder[i] === gameOrder[i]) {
                console.log('mistake, round ended');
                endRound();
                return;
            }
        }
        console.log("hurray");
        setScore(score += 1)
        index++
        // play pattern with one new step.
        playPattern()
    }


    const flashG = () => {
        setFlashGreen(true)
        const run = setInterval(()=>{setFlashGreen(false) },600);
        const clear = setInterval(()=>{clearInterval(run)},700);
    }
    const flashR = () => {
        setFlashRed(true)
        const run = setInterval(()=>{setFlashRed(false) },600);
        const clear = setInterval(()=>{clearInterval(run)},700);
    }
    const flashB = () => {
        setFlashBlue(true)
        const run = setInterval(()=>{setFlashBlue(false) },600);
        const clear = setInterval(()=>{clearInterval(run)},700);
    }
    const flashY = () => {
        setFlashYellow(true)
        const run = setInterval(()=>{setFlashYellow(false) },600);
        const clear = setInterval(()=>{clearInterval(run)},700);
    }
    let animation = {'red': flashR, 'blue': flashB, "green": flashG, "yellow": flashY}

  return (
    <div className="App">
        <h1>SimonSays</h1>
        <p>Score: {score}</p>

        <div className="max">
            <div className="center"><button className="begin" onClick={startRound}>Start</button></div>
            <div className="squares">
                 <div className={flashGreen ? "light-green":'green'} onClick={addPlayerMove} id={'green'}></div>
                 <div className={flashYellow ? "light-yellow":"yellow"} onClick={addPlayerMove} id={'yellow'}></div>
                 <div className={flashRed ? 'light-red': 'red'} onClick={addPlayerMove} id={'red'}></div>
                 <div className={flashBlue ? "light-blue" : "blue"}  onClick={addPlayerMove} id={'blue'}></div>
            </div>

        </div>
    </div>
  );
}
export default App;
