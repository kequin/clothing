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
import Custom from './components/custom';
import Menu from './components/menu';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const [menu, setMenu] = useState(false);
  window.onload = () => checkfirst();
  const checkfirst = () => {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem('theme');
    if (theme === null) { theme = 'dark'; localStorage.setItem('theme', 'dark'); }
    else localStorage.setItem('theme', theme);
    htmlElement.setAttribute('data-theme', theme);
  }
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
  const changeMenu = () => {setMenu(()=>!menu)}
  return (
    <div>
      <Context.Provider value={theme}>
        <Router>
          <Header menu={menu} changeMenu={changeMenu} theme={theme} changeTheme={ChangeTheme} />
          <Menu changeMenu={changeMenu} menu={menu}/>
            <Route path='/' component={Main_Page} exact/>
            <Route path='/custom' component={Custom} exact/>
            <Route path='/products/:list' component={List} exact/>
            <Route path='/products/:list/:id' component={More} exact/>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
