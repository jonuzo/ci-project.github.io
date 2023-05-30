// setting up Firebase with website
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDm9IQOiJuG2m5P9w1Y9ujtqREvpfodQr0",
  authDomain: "auth-form-e7647.firebaseapp.com",
  projectId: "auth-form-e7647",
  storageBucket: "auth-form-e7647.appspot.com",
  messagingSenderId: "361601287447",
  appId: "1:361601287447:web:42da231877dd43039d2352"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// ====================

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
