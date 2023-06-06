import { BrowserRouter,Route,Routes,Navigate, NavLink } from 'react-router-dom'
import './App.scss';
import { AboutMeContainer } from './components/AboutMeContainer/AboutMeContainer';
import { EducationContainer } from './components/EducationContainer/EducationContainer';
import { ExperienceContainer } from './components/ExperienceContainer/ExperienceContainer';
import { NavBar } from './components/NavBar/NavBar';
import { PortfolioContainer } from './components/PortfolioContainer/PortfolioContainer';
import { ContactContainer } from './components/ContactContainer/ContactContainer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AdminContainer } from './components/AdminContainer/AdminContainer';


function App() {

  return (
    <BrowserRouter>
  
        <NavBar/>

        <Routes>
        
            <Route exact path="/" element={<AboutMeContainer/>}/>
            <Route exact path="/education" element={<EducationContainer/>}/>
            <Route exact path="/experience" element={<ExperienceContainer/>}/>
            <Route exact path="/portfolio" element={<PortfolioContainer/>}/>
            <Route exact path="/contact" element={<ContactContainer/>}/>
            <Route exact path="/admin" element={<AdminContainer/>}/>
            <Route exact path="*" element={<Navigate to="/"/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
