import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blogs from "./pages/Blogs";
import TermsAndServices from "./pages/TermsAndServices";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import SharedLayout from "./components/SharedLayout";
import './styles/truetalk.scss'


function App(props) {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/'element={<Home />}></Route>
        <Route path='/home'element={<Home />}></Route>
        <Route path='/books' element={<Books />}></Route>
        
          <Route element={<SharedLayout />}>
            <Route path='/about' element={<About />}></Route>
            <Route path='/account' element={<Account />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/videos' element={<Videos />}></Route>
            <Route path='/blog' element={<Blogs />}></Route>
            <Route path='/contact-us' element={<Contact />}></Route>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
            <Route path='/disclaimer' element={<Disclaimer />}></Route>
            <Route path='/terms-and-conditions' element={<TermsAndServices />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
