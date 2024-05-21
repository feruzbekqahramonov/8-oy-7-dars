import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Muisc from "./pages/Muisc";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { getToken } from "./components/utils";

function App() {
  useEffect(() => {
    getToken()
  }, [])
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home></Home>
          </Layout>
        }
      ></Route>
      <Route
        path="/likes"
        element={
          <Layout>
            <Likes></Likes>
          </Layout>
        }
      ></Route>
      <Route
        path="/playlist/:id"
        element={
          <Layout>
            <Muisc></Muisc>
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
