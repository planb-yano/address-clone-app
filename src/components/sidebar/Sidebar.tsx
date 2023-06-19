import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = (props: Props) => {
  const { setIsModalOpen } = props;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="overlay" onClick={() => handleClose()}>
        <div className="sidebarLeft" onClick={(e) => e.stopPropagation()}>
          <div className="sidebarHeader">
            <img src="/unchi_character.png" alt="" />
            <p className="userName">矢野貴大</p>
          </div>
          <div className="sidebarMain">
            <div className="sidebarMainHome">
              <HomeIcon fontSize="large" />
              <p className="sidebarMainHomeName">ホーム</p>
            </div>
            <div className="sidebarMainAddress">
              <ListIcon fontSize="large" />
              <p className="sidebarMainAddressName">連絡先</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;