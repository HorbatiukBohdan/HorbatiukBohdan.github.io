import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import store from './redux/store';


function App(props) {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path='/dialogs'
              element={ () => <Dialogs store={props.store} /> } />
            <Route path='/profile'
             element={ () => <Profile
               profilePage={props.state.profilePage} 
             dispatch={props.dispatch}/>}/>
            <Route path="/dialogs/*" element={<Dialogs store={props.store} />} /> 
          </Routes>
        </div>
      </div>
   
  );
}

export default App;
