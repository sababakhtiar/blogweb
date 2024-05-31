
import './App.css';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Chatbot from "./Components/Chatbot"

import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage'
import  NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
  <BrowserRouter>
  <Chatbot/>
   <Navbar />
  <Routes>
   
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
   
    
    <Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />
 <Route path="*" element={<NotFoundPage />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App;