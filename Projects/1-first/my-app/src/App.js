import './App.css'
import React from '@testing-library/react'
import Header from './componets/Header/Haeder'
import Nav from './componets/Navbar/Navbar'
import Profile from './componets/Profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import News from './componets/News/news'
import Music from './componets/Music/music'
import Settings from './componets/Settings/settings'
import Dialogs from './componets/Dialogs/Dialogs'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div class='app-wrapper-content'>
          <Route path='/pofile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
