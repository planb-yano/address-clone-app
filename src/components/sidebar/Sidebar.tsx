import React from "react";
import "./Sidebar.scss";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = (props: Props) => {
  const { setIsModalOpen } = props;
  const user = useAppSelector((state) => state.user.user);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="overlay" onClick={() => handleClose()}>
        <div className="sidebarLeft" onClick={(e) => e.stopPropagation()}>
          <div className="sidebarHeader">
            <img src={user?.photo} alt="" />
            <p className="userName">{user?.displayName}</p>
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
