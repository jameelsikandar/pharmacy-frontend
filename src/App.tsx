import { useEffect } from "react";
import LoginPage from "./pages/Login/LoginPage"
import AOS from 'aos'
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init({
      disable: 'phone',           // Disable animations on phones
      duration: 1000,              // Animation duration in ms
      easing: 'ease-out-cubic',  // Animation easing
      once: true                 // Whether animation should happen only once
    });
  }, []);
  return (
    <>
     <LoginPage />
    </>
  )
}

export default App
