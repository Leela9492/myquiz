import React,{useState} from 'react'
import './Quizapp.css'

function Quizapp() {

    const [count,setCount]=useState(0);
    const [score,setScore]=useState(0);
    let answer="";
    const questions=[
        {
            question:"Who is the Chief Minister for Andhra Pradesh?",
            options:[
                "Nara Chandra Babu Naidu",
                "Konidela Pawan Kalyan",
                "Nara Lokesh Babu",
                "Revanth Reddy"
            ],
            correctoption:"Nara Chandra Babu Naidu"
        },
        {
            question:"What is the Capital of Andhra Pradesh?",
            options:[
                "Nellore",
                "Amaravathi",
                "Warangal",
                "Vishakapatnam"
            ],
            correctoption:"Amaravathi"
        },
        {
            question:"What is the capital for India?",
            options:[
                "Jaipur",
                "New Delhi",
                "Patna",
                "Banglore"
            ],
            correctoption:"New Delhi"
        },
        {
            question:"How many states are there in India?",
            options:[
                "29 states",
                "13 states",
                "25 states",
                "32 states"
            ],
            correctoption:"29 states"
        },
        {
            question:"Who is Deputy Chief Minister for Andhra Pradesh?",
            options:[
                "Nara Lokesh Babu",
                "YS Jagan",
                "Konidela Pawan Kalyan",
                "Konidela Chiranjeevi"
            ],
            correctoption:"Konidela Pawan Kalyan"
        }
    ]
    let temp=0;
    function checkAnswer(index){
        answer=document.getElementById(index).innerHTML;
        if(questions[count].correctoption===answer){
            console.log("score updated at value: "+answer);
            temp=score+1;
            setScore(temp)
            console.log("score value is updated successfully...!!!: "+temp);
        }
        if(count<questions.length-1){
            setCount(count+1);
            console.log("count value updated...!!!");
        }
        if(count+1===questions.length){
            let container=document.getElementById('container');
            container.removeChild(document.getElementById('quiz'));
            container.removeChild(document.getElementById('heading'));
            document.getElementById('resultscore').innerHTML="you got score of "+temp+"/"+questions.length;
        }
    }
  return (
    <div className="container" id="container">
        <h1 id="heading">Quiz Application</h1>
        <div className="quiz" id="quiz">
            <h3>Question: {count+1}</h3>
            <h4>{questions[count].question}</h4>
            <div id="options">
                {questions[count].options.map((x,index)=><li onClick={()=>checkAnswer(index)} key={index} id={index}>{x}</li>)}
            </div>
            <br/>
        </div>
        <div id="resultscore"></div>
    </div>
  )
}

export default Quizapp;