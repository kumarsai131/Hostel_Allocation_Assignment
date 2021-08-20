import {useState, useEffect } from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Header from './Header'
import Hostel from './Hostel'


const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

export default function SignIn(){
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
      }, []);

    if (!isSignedIn) {
        return (
            <>
            <div style={{ display:'flex' ,justifyContent:'center',flexDirection:'column',alignItems:'center', height:'100vh'}}>
            <h1>Hostel Allocation</h1>
            <p>Please Sign In</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
            </>
        );
      }

    const user = JSON.parse(localStorage.getItem('myKey'));
    console.log(firebase.auth().currentUser.email === user.email,
    user.room!=='0',
    user.floor!=='0')
    if(firebase.auth().currentUser.email === user.email && user.room!=='0'){
    return(
      <>
        <Header/>
          <div style={{textAlign:"center"}}>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <p>You have already booked a room</p>
            <h3>Your Room Details are</h3>
            <li>Hostel No - {user.floor}</li>
            <li>Room No - {user.room}</li>
          </div>
      </>
    )
    }
    return(
        <>
        <Header/>
        <Hostel/>
        </>
    )
}