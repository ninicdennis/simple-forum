import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Homepage from './pages/homepage/homepage'
import Userpage from './pages/userPage/userpage'
import Topic from './pages/topicpage/topicpage'
import CreateTopic from './pages/createtopic/createtopic'
import Login from './pages/login/login'

import Header from './component/header/header'

function App() {
  return (
    <div>
      <Header />
      <Route exact path = '/' component = {Homepage}/>
      <Route exact path = '/user' component = {Userpage} />
      <Route exact path ='/topic' component = {Topic}/>
      <Route exact path ='/createtopic' component = {CreateTopic}/>
      <Route exact path ='/login' component = {Login}/>
    </div>
  );
}

export default App;
