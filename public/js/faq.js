"use strict";

const $ = (selector) => document.querySelector(selector);
let timeCounter = 10;
let timer;
const goToTerms = () =>{
    timeCounter -= 1;

    if(timeCounter>0){
        $("#seconds").textContent = timeCounter
    }else{
        window.location.href = "terms"
    }
} 

const acceptTerms = () =>{
    clearInterval(timer);
    $("#terms").setAttribute("class","hidden");
}

const toggleQuestion = (evt) =>{
    evt.currentTarget.classList.toggle("minus")
    let answerDiv = evt.currentTarget.nextElementSibling;

    answerDiv.classList.toggle("open");


}

document.addEventListener("DOMContentLoaded", () => {

    $("#seconds").textContent = timeCounter;
    //step one: check if user accepted terms
    const query = window.location.search;
    const urlParameters = new URLSearchParams(query);
    const accepted = urlParameters.get("accepted");

    
    $("#accept").addEventListener("click",acceptTerms);

    if(accepted){
        $("#terms").setAttribute("class","hidden")
    }else{
        timer = setInterval(goToTerms,1000);
    }

    const h2Elements = document.querySelectorAll("h2");
    for(let h2 of h2Elements){
        h2.addEventListener("click",toggleQuestion);
    }
});
