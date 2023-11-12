import {Card} from "./Card";
import React from "react"
import './css/Set.css';
import { useLocation, useParams } from "react-router-dom"; 
export function Set(){
    const param = useParams();
    console.log(param.id)

    const location = useLocation()
    const { set }= location.state;

    const cards = require('../data.json').filter((item)=>(item.setName === set));
    
    const [step, setStep] = React.useState(0);
    const lenght = Object.keys(cards).length;

    const handleIncrement = () => {
        if (step != lenght - 1) { 
            setStep((i) => i + 1); 
          
        } 
    }
    const handleDecrement = () => {
        if (step != 0) { 
            setStep((i) => i - 1); 
           
        }
    }
    return (
    <div className="card_block">
        <h2>Название набора</h2>
        <Card key={cards[step].id} front={cards[step].front} back={cards[step].back}/>
        <div className="slider_button">
            <button className="button_left" onClick={handleDecrement} disabled={step === 0}>V</button>
            <p>{step + 1}/{lenght}</p>
            <button className="button_right" onClick={handleIncrement} disabled={step === lenght - 1}>V</button>   
        </div>
    </div>
    );
}