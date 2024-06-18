import { randomInt } from "./Common";
import { useState } from "react";
import die1 from "./die1.png";
import die2 from "./die2.png";
import die3 from "./die3.png";
import die4 from "./die4.png";
import die5 from "./die5.png";
import die6 from "./die6.png";


function rollDice() {
    const rolls = [];
    const numberOfDice = parseInt(document.getElementById('numberOfDice').value);
    console.log(numberOfDice);
    if (numberOfDice === 'NaN' || numberOfDice < 1 || numberOfDice > 10) {
        return ({dice: rolls});
    }
    for (let i = 0; i < numberOfDice; i ++) {
        rolls.push(getDie());
    }
    return ({dice:rolls});
}

function getDie() {
    const roll = randomInt(1,6);
    switch(roll) {
        case 1:
            return ({image:die1, altText:"1"});
        case 2:
            return ({image:die2, altText:"2"});
        case 3:
            return ({image:die3, altText:"3"});
        case 4:
            return ({image:die4, altText:"4"});
        case 5:
            return ({image:die5, altText:"5"});
        default:
            return ({image:die6, altText:"6"});
    }
}

function DiceRoller() {
    const [diceData, setDice] = useState({dice: [{image:die1, altText:"1"}, {image:die1, altText:"1"}]});
    const images = [];
    if (diceData.dice.length === 0) {
        images.push(<p>Please enter a valid number in the range of 1 to 10.</p>)
    } else {
        for (let i = 0; i < diceData.dice.length; i ++) {
            images.push(<img src={diceData.dice[i].image} alt={diceData.dice[i].altText} key={i}/>);
        }
    }
    return(
        <div>
            <h2>Dice Roller</h2>
            <label htmlFor='numberOfDice'># of Dice:</label>
            <input type='number' id='numberOfDice' name='numberOfDice' min='1' max='10' defaultValue={2}/>
            <br/>
            {images}
            <br/>
            <br/>
            <button type='button' onClick={() => setDice(rollDice())} >Roll</button> 
        </div>
    );

}

export default DiceRoller;
