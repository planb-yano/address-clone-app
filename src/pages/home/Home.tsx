import React from "react";
import "./Home.scss";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Home = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  };

  return (
    <div className="home">
      <h3 className="homeTitle">
        マイアドレス帳をご利用の方はGoogleでログインしてください
      </h3>
      <button className="homeButton" onClick={signIn}>
        Googleでログイン
      </button>
    </div>
  );
};

export default Home;
