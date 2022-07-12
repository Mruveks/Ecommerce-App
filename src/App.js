import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Sale from './Pages/Sale/Sale'
import Footwear from './Pages/Footwear/Footwear'
import Apparel from './Pages/Apparel/Apparel'
import NewArrivals from './Pages/NewArrivals/NewArrivals';
import Accessories from './Pages/Accessories/Accessories';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/footwear" element={<Footwear/>}/>
          <Route path="/apparel" element={<Apparel/>}/>
          <Route path="/newArrivals" element={<NewArrivals/>}/>
          <Route path="/accessories" element={<Accessories/>}/>

        </Routes>
    </Router>
  );
  }

export default App;
