import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="headerIcon">
          <MenuIcon fontSize="large" />
        </div>
        <h2>マイアドレス帳</h2>
      </div>
      <button className="headerButton">ログアウト</button>
    </div>
  );
};

export default Header;