import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Error from "./Pages/Error/Error";
import Contact from "./Pages/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import WishList from "./Pages/WishList/WishList";
import Cart from "./Pages/Cart/Cart";
const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
