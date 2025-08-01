import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import AddEvent from "./Components/Pages/AddEvent";
import ViewEvent from "./Components/Pages/ViewEvent";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddEvent" element={<AddEvent />} />
        <Route path="/ViewEvent" element={<ViewEvent />} />
      </Routes>
    </>
  );
};

export default App;
