import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import AddressBook from "./pages/addressbook/AddressBook";
import AddressForm from "./pages/addressform/AddressForm";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./firebase";
import { login, logout } from "./features/user/userSlice";
import AddressIndex from "./pages/addresses/Addresses";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            displayName: loginUser.displayName,
            email: loginUser.email,
            photo: loginUser.photoURL,
          })
        );
        navigate("/addressBook");
      } else {
        dispatch(logout);
        navigate("/");
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {isModalOpen ? <Sidebar setIsModalOpen={setIsModalOpen} /> : null}
      <Header setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addressBook"
          element={user ? <AddressIndex /> : <Navigate replace to="/" />}
        >
          <Route index element={<AddressBook />} />
          <Route
            path=":addressId?/edit"
            element={user ? <AddressForm /> : <Navigate replace to="/" />}
          />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
