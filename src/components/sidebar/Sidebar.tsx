import React from "react";
import "./Sidebar.scss";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";

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
            <Link to="/addressBook" onClick={() => handleClose()}>
              <div className="sidebarMainAddress">
                <ListIcon fontSize="large" />
                <p className="sidebarMainAddressName">連絡先</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
