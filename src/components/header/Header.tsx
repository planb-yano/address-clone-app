import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import { auth } from "../../firebase";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: Props) => {
  const { setIsModalOpen } = props;
  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <div className="headerIcon" onClick={handleModal}>
          <MenuIcon fontSize="large" />
        </div>
        <h2>マイアドレス帳</h2>
      </div>
      <button className="headerButton" onClick={() => auth.signOut()}>
        ログアウト
      </button>
    </div>
  );
};

export default Header;
