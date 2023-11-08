import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_KGCjxTqqBeEmbUQ6pQF44Lx2H6WpPlA",
    authDomain: "authentication-ita-23.firebaseapp.com",
    projectId: "authentication-ita-23",
    storageBucket: "authentication-ita-23.appspot.com",
    messagingSenderId: "964912416394",
    appId: "1:964912416394:web:543111b29193abe3910f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//code starts here
let userInput = "";
const inputElement = document.querySelector("input");

//eventlistener that saves the new user input in a userInput variable
inputElement.addEventListener("input", function() {
    userInput = inputElement.value;
    console.log(userInput);
})

const button = document.querySelector(".fetch-button");
button.addEventListener("click", function (){

    //console.log(userInput);
    //fetches API data determined by user API-input
    fetch(userInput)
        .then(response => response.json())
        .then(apiData => {
            console.log(apiData)
            renderApiData(apiData)
        })
        .catch(error => {
            alert("Error: " + error + ". Check that input is correct");
        });
})

function renderApiData(apiData){

    console.log("it logs");
    const div = document.querySelector(".API-data");
    div.innerHTML = "";
    const span = document.createElement("span");
    div.appendChild(span);
    span.innerText = JSON.stringify(apiData);
}