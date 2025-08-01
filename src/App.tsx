import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
