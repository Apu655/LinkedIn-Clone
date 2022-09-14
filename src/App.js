import React, { useEffect,useState} from 'react';
import {useSelector} from 'react-redux'
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
// import { selectUser } from './features/counter/userSlice';
import Login from './components/Login';
import {getAuth,onAuthStateChanged} from 'firebase/auth'

function App() {
  //const user = 1
  const auth = getAuth()
  //const user = useSelector(selectUser)
  const [users,setUser]= useState()
  //console.log(user)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user){
        const uid = user.uid
        setUser(user)

      }
      else{
        console.log("User is not logged in.")
      }
    })
  },[users])
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      {users?    (
      <div className='app_body'>
        
      {/* Body */}


      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>
      {/* Fidget */}
      </div>
      ):
        (<Login/>)
      
    }
    </div>
  );
}

export default App;
