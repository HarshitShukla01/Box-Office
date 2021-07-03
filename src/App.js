import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Navs from './components/Navs.js'
import Home from './pages/Home'
import Starred from './pages/Starred'
import MainPageLayout from './components/MainPageLayout'
import Show from './pages/Show'
import { ThemeProvider } from 'styled-components'

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Switch>
       <Route path='/' exact><Home/></Route>
       <Route path='/starred' exact><Starred/></Route>
       <Route path='/show/:id' exact><Show/></Route>
       <Route>404 Page</Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
