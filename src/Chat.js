import React, { useRef, useState }from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';
import 'firebase/analytics';
import './Chat.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDoONIIx7e6-FtYEK2DfzAvEtDifAb6KFM",
    authDomain: "portfolio0-auth.firebaseapp.com",
    databaseURL: "https://portfolio0-auth.firebaseio.com",
    projectId: "portfolio0-auth",
    storageBucket: "portfolio0-auth.appspot.com",
    messagingSenderId: "939619043368",
    appId: "1:939619043368:web:d2b299f2dc5bbe51e28d1d",
    measurementId: "G-LN5L7T0T99"
  })
  
const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();

export const Chat = () => {

    const [ user ] = useAuthState(auth);

    return (
        <div className = "Chat">
            <header>
                <h1>&#128512;</h1>
                <SignOut />
            </header>
            <section>
                { user ? <ChatRoom /> : <SignIn /> }
            </section>
        </div>
    )
}

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button className ="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function ChatRoom() {

    const dummy = useRef;
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState(''); 

    const sendMessage = async(e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (<>

            <main>
                {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} />)}
                {/* <span ref={dummy}></span> */}
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                <button type="submit" disabled={!formValue}>submit</button>
            </form>
        </>
    )
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

    return (<>
       <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
       </div>
       </>
    )
};

/* can use for reference   https://www.youtube.com/watch?v=zQyrwxMPm88*/ 
