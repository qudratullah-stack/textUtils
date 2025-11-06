
import './App.css';
import Contact from './component/Contact';
import { BrowserRouter, Routes, Route,   } from 'react-router-dom';
import About from "./component/About";
import Header from "./component/Header";
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Contact qudrat="Welcome Text Editor app" />} />  
      
          <Route path="/header" element={<Header title="My Header Page" />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;