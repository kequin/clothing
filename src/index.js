import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main_Page from './components/main_page';
import Header from './components/header/index.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer';
import { Context } from './context';
import List from './components/list';
import More from './components/more';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  window.onload = () => checkfirst();
  const checkfirst = () => {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem('theme');
    console.log(theme);
    if (theme === null) { theme = 'dark'; localStorage.setItem('theme', 'dark'); }
    else localStorage.setItem('theme', theme);
    htmlElement.setAttribute('data-theme', theme);
  }
  console.log(window.screen);
  const ChangeTheme = () => {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem('theme');
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      theme = 'dark';
    } else if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      theme = 'light';
    } else if(theme === null){
      localStorage.setItem('theme', 'light');
      theme = 'light';
    }
    setTheme(theme);
    htmlElement.setAttribute('data-theme', theme);
  }
  return (
    <div>
      <Context.Provider value={theme}>
        <Router>
          <Header theme={theme} changeTheme={ChangeTheme} />
            <Route path='/' component={Main_Page} exact/>
            <Route path='/:list' component={List} exact/>
            <Route path='/:list/:id' component={More} exact/>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
