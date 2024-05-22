import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./module/Layout";
import SongList from "./module/Song/SongList";
import SongForm from "./module/Song/SongForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SongList />}></Route>
          <Route path="/add" element={<SongForm />}></Route>
          <Route
            path="/edit/:id"
            element={<SongForm isEditForm={true} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
