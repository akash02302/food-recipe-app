import{
  BrowserRouter  as Router,
  Routes,
  Route
}from "react-router-dom";

import Navbar from "./components/Navbar"; // Importing the Navbar component
import Footer from './components/Footer';
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import Recipes from "./Pages/Recipes";

function App() {
  return (
    <Router>
      <Navbar /> 
    <div className= "container main">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/settings" element={<Setting/>} />
      </Routes>
    </div>
    <Footer />
    </Router>
    
  );
}

export default App; // Exporting the App component
