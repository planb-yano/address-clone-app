import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import AddressBook from "./pages/addressbook/AddressBook";
import AddressForm from "./pages/addressform/AddressForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="App">
      {isModalOpen ? <Sidebar setIsModalOpen={setIsModalOpen} /> : null}
      <Header setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addressBook" element={<AddressBook />} />
        <Route path="/addressForm" element={<AddressForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
