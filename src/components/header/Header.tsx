import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: Props) => {
  const { setIsModalOpen } = props;
  const user = useAppSelector((state) => state.user.user);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleSignOut = () => {
    auth.signOut();
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="headerLeft">
        {user ? (
          <div className="headerIcon" onClick={handleModal}>
            <MenuIcon fontSize="large" />
          </div>
        ) : null}
        <h2>マイアドレス帳</h2>
      </div>
      {user ? (
        <button className="headerButton" onClick={handleSignOut}>
          ログアウト
        </button>
      ) : null}
    </div>
  );
};

export default Header;
