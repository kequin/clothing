import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main_Page  from './components/main_page';
import Header from './components/header/index.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Futter from './components/futter';
import { Context } from './context';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    checkfirst();
  },[]);
  const checkfirst = () => {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem('theme');
    console.log(theme);
    if(theme === null) {theme = 'dark';  localStorage.setItem('theme', 'dark');}
    else localStorage.setItem('theme', theme);
    htmlElement.setAttribute('data-theme', theme);
  }
    console.log(window.screen);
  const ChangeTheme = () => {
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem('theme');
      if (theme === 'light' ) {
          localStorage.setItem('theme', 'dark');
          theme = 'dark';
          console.log('now dark');
      } else if(theme === 'dark') {
          localStorage.setItem('theme', 'light');
          theme = 'light';
          console.log('now light');
      }
      setTheme(theme);
      htmlElement.setAttribute('data-theme', theme);
  }
  return ( 
    <div>
      <Context.Provider value = { theme }>
        <Header changeTheme = {ChangeTheme}/>
        <Router>
          <Route path='/' component={Main_Page}/>
        </Router>
        <Futter />
      </Context.Provider>
    </div>
  );
}

export default App;
ReactDOM.render(<App/>,document.getElementById('root'));
reportWebVitals();
