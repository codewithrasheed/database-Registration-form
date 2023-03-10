// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGEpciJ_gMWGT5IOn0KdJ_9CpaI4VCVs4",
  authDomain: "registration-form-b75b0.firebaseapp.com",
  projectId: "registration-form-b75b0",
  storageBucket: "registration-form-b75b0.appspot.com",
  messagingSenderId: "271474196700",
  appId: "1:271474196700:web:570e48275a175a30157419",
  measurementId: "G-6LJJ900PCR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

let inp1 = document.getElementById("registration1");
let inp2 = document.getElementById("registration2");
let inp3 = document.getElementById("registration3");
let inp4 = document.getElementById("registration4");
let inp5 = document.getElementById("registration5");
let inp6 = document.getElementById("registration6");
let inp7 = document.getElementById("registration7");
let inp8 = document.getElementById("registration8");

window.saveValue = function () {
  // console.log(inp.value)
  var obj = {
    firstname: inp1.value,
    lastname: inp2.value,
    email: inp3.value,
    password: inp4.value,
    contactno: inp5.value,
    cnic: inp6.value,
    lastqualification: inp7.value,
    course: inp8.value,
  };
  obj.id = Math.random().toString().slice(2);
  
  const taskRef = ref(database, `Form Values/${obj.id}/`);
  set(taskRef, obj).then(function(res){
    alert("Form Submitted")
    window.location.assign("data.html")
  }).catch(function(err){
    console.log(err)
  });
  console.log(obj);
};

