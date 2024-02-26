import "./App.css";
import React from "react";
import { useContext, useState } from "react";
import Home from "./Components/E-comm/Pages/Home";
import Cart from "./Components/E-comm/Pages/Cart";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Provider } from "react-redux";
// import CustomProvider from "./Components/E-comm/Context/Context";
// import store from "./Components/E-comm/Store/store";
import { AuthContext } from "./Components/E-comm/Context/Context";
import NavBar from "./Components/E-comm/Components/NavBar";
import LoginPage from "./Components/E-comm/Pages/LoginPage";
import RegisterPage from "./Components/E-comm/Pages/RegisterPage";
import ProductDetails from "./Components/E-comm/Pages/ProductDetails";

function App() {
  // const [text, setText] = useState("");
  const { isloggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        {isloggedIn && <NavBar />}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {isloggedIn ? (
            <>
              <Route
                path="/home"
                element={isloggedIn ? <Home /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/cart"
                element={isloggedIn ? <Cart /> : <Navigate to="/login" />}
              ></Route>

              <Route
                path="/productDetails/:id"
                element={
                  isloggedIn ? <ProductDetails /> : <Navigate to="/login" />
                }
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/login" />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>

      {/* <ProductDetails /> */}
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
  {isloggedIn && <NavBar />}
  <Routes>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    {isloggedIn ? (
      <React.Fragment>
        <Route
          path="/home"
          element={isloggedIn ? <Home /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/cart"
          element={isloggedIn ? <Cart /> : <Navigate to="/"></Navigate>}
        ></Route>

      </React.Fragment>
    ) : (
      <Route path="/" element={<Navigate to="/login" />}></Route>
    )}
  </Routes>
</BrowserRouter>; */
}
