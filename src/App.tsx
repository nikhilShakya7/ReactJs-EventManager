import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AddEvent from "./Components/Pages/AddEvent";
import ViewEvent from "./Components/Pages/ViewEvent";
import DeleteEvent from "./Components/Pages/DeleteEvent";
import UpdateEventForm from "./Components/Pages/UpdateEventForm";
import UpdateEvent from "./Components/Pages/UpdateEvent";
import Layout from "./Components/Layout";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/ViewEvent" element={<ViewEvent />} />
          <Route path="/DeleteEvent" element={<DeleteEvent />} />
          <Route path="/UpdateEventForm/:id" element={<UpdateEventForm />} />
          <Route path="/UpdateEvent" element={<UpdateEvent />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
