import { Home } from "./pages/Home";
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import {Category} from './pages/Category';
import {Recipe} from './pages/Recipe';
import {About} from './pages/About'
import {ScrollTop} from './components/ScrollTop'
import {lightTheme, darkTheme, GlobalStyles} from './themes'

import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';


function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
          <Router basename="/recipe">
            <div className='wrapper'>
              <Header themeToggler={themeToggler} />
              <div className='content container main'>
                <Routes>
                  <Route exact path='/' element={<Home/>}></Route>
                  <Route path='/categories/:name' element={<Category/>}></Route>
                  <Route path='/meal/:id' element={<Recipe/>}></Route>
                  <Route path='/about' element={<About />}></Route>
                </Routes>
              </div>
            </div>
            <Footer />
            <ScrollTop />
          </Router>
      </ThemeProvider>
    </>
  );
}

export default App;