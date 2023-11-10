import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
const auth = getAuth();

//authentication/try catch exercise
/*
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
 */
const name = document.querySelector("#name").value;
const button = document.querySelector("#submit");

// Register a new user with email and password
function registerUser() {
    //because email and user are declared inside the registerUser-function
    //and registerUser gets called when button is clicked, the program takes
    //whatever input is in the input slots. if they were declared outside of
    //the function, they would just be empty and we would get an invalid-error
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User registered:", user.uid);
        })
        .catch((error) => {
            alert("Registration error:" + error.message);
        });
}

button.addEventListener("click", function (){
    console.log("clicked button");
    registerUser();
})
//opgave
//implentation af log in og redirection to a dashboard

//Altid lyt til emily XD
//change flex box visibility directly in js
//const xxx queryselctor (xxxx)
//xxxx.style.display = "block" or "none"
//documents = all notes
//collection = user information (userID), note-text, etc
//user id = user.uid
