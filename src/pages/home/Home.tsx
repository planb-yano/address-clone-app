import React from "react";
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <h3 className="homeTitle">マイアドレス帳をご利用の方はGoogleでログインしてください</h3>
      <button className="homeButton">Googleでログイン</button>
    </div>
  );
};

export default Home;
