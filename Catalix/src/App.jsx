
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistics from './pages/statistics';

import data from "./data/chart1.json"
import MainPage from './pages/mainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/stats' element={<Statistics data={data["data"]} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
