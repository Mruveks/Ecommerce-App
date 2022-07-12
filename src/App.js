import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Sale from './Pages/Sale/Sale'
import Footwear from './Pages/Footwear/Footwear'
import Apparel from './Pages/Apparel/Apparel'
import NewArrivals from './Pages/NewArrivals/NewArrivals';
import Accessories from './Pages/Accessories/Accessories';
import WomanApparel from './Pages/Apparel/Woman/WomanApparel'
import ManApparel from './Pages/Apparel/Man/ManApparel'
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

          <Route path="/apparel/woman" element={<WomanApparel/>}/>
          <Route path="/apparel/man" element={<ManApparel/>}/>
        </Routes>
    </Router>
  );
  }

export default App;
