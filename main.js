// setting up Firebase with website 
  apiKey: "AIzaSyDm9IQOiJuG2m5P9w1Y9ujtqREvpfodQr0",
  authDomain: "auth-form-e7647.firebaseapp.com",
  projectId: "auth-form-e7647",
  storageBucket: "auth-form-e7647.appspot.com",
  messagingSenderId: "361601287447",
  appId: "1:361601287447:web:42da231877dd43039d2352"
});

// Initializing Firebase Firestore and Firebase Auth
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// ====================

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // // Firebase authentication method for creating a new user
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // User signed up successfully
            document.write("You are Signed Up")
            console.log(result)
            alert(user.email+" Signed up successfully!!!");
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert(errorMessage);
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Firebase authentication method for signing in a user
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // User Signed in successfully
            document.write("You are Signed In")
            console.log(result)
            alert(user.email+" Signed in successfully!!!");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert(errorMessage);
        });
}


