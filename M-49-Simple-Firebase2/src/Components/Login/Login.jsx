import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    console.log("google login is working");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        console.log(result.user);
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    console.log("sign out is working");
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleLogin}>Google Login</button>
      )}
      {user && (
        <div>
          <h2>User:{user.displayName}</h2>
          <h3>Email:{user.email}</h3>
          <img src={user.photoURL} alt="" srcSet="" />
        </div>
      )}
    </div>
  );
};

export default Login;
