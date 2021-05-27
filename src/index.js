import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body  from './components/main/elements.js'
import Header from './components/main/header/index'
import reportWebVitals from './reportWebVitals';

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
      <Header changeTheme = {ChangeTheme} them = {theme}/>
      <Body/>
    </div>
  );
}

export default App;
ReactDOM.render(<App/>,document.getElementById('root'));
reportWebVitals();
