import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="App">
      {isModalOpen ? <Sidebar setIsModalOpen={setIsModalOpen} /> : null}
      <Header setIsModalOpen={setIsModalOpen} />
      <Home />
    </div>
  );
}

export default App;
