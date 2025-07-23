import React from "react";
import Navbar from "./components/user/nav";
import Banner from "./components/user/banner";
import Footer from "./components/user/footer";
import Menu from "./components/user/menu";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "../src/App.css";
import Brunch from "./components/user/brunch";
import Food from "./components/user/food";


function App() {
  return (
  <BrowserRouter>
  <Routes>

    <Route path="/" element={[<Navbar/>,<Banner/>,<Menu/>,<Footer/>]}>

    </Route>
<Route path="/brunch" element={[<Navbar/>,<Banner/>,<Brunch/>,<Footer/>]}></Route>

  
<Route path="/food" element={[<Navbar/>,<Banner/>,<Food/>,<Footer/>]}></Route>

  </Routes>
  
  </BrowserRouter>

  
  );
}

export default App;
