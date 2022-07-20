import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from "./components/navbar";
import Sources from "./components";
import Posts from "./components/posts";
import Photos from "./components/photos";
import Users from "./components/users";
import Search from "./components/search";

function App() {

  return (
    <>
        <Navbar />

        <div >
          <Routes>
            <Route path="/" element={<Sources />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Search/:filter" element={<Search />} /> 
          </Routes>
        </div>
    </>
  )
}

export default App
