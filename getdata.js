import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
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



let mytable = document.getElementById("mytable");
let tbody = document.getElementById("tbody");

function getData() {
    const database = getDatabase();
  var dataList = [];
  const taskRef = ref(database, "Form Values/");
  onChildAdded(taskRef, function (dt) {
    dataList.push(dt.val());
    console.log(dataList);
    tbody.innerHTML = "";
    for (var i = 0; i < dataList.length; i++) {
        tbody.innerHTML += `<td>${dataList[i].id}</td> <td>${dataList[i].firstname}</td> <td>${dataList[i].lastname}</td> <td>${dataList[i].email}</td> <td>${dataList[i].password}</td> <td>${dataList[i].contactno}</td> <td>${dataList[i].cnic}</td> <td>${dataList[i].lastqualification}</td> <td>${dataList[i].course}</td>`;
        
    }
});
}
getData();