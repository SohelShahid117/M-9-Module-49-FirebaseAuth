import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    console.log("google mama is coming");
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  const handleSignOut = () => {
    console.log(`sign out is working`);
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Login</button>
      )}
      {user && (
        <div>
          <h3>User:{user.displayName}</h3>
          <h3>Email:{user.email}</h3>
          <img src={user.photoURL} alt="" srcSet="" />
        </div>
      )}
    </div>
  );
};

export default Login;
