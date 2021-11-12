import './App.css'
import React from '@testing-library/react'
import Header from './componets/Header/Haeder'
import Nav from './componets/Navbar/Navbar'
import Profile from './componets/Profile/Profile'
import { Route } from 'react-router-dom'
import News from './componets/News/news'
import Music from './componets/Music/music'
import Settings from './componets/Settings/settings'
import Dialogs from './componets/Dialogs/Dialogs'

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav navbar={props.state.Navbar}/>
        <div className='app-wrapper-content'>
          <Route path='/pofile' 
            render= { () => <Profile 
            profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path='/dialogs' 
            render={ () => <Dialogs 
            dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          <Route path='/news' 
            render={ () => <News />} />
          <Route path='/music' 
            render={ () => <Music />} />
          <Route path='/settings' 
            render={ () => <Settings />} />
        </div>
      </div>
  );
}

export default App;
