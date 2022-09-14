import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import {getAuth,signOut} from 'firebase/auth'

function ProfileIcon() {
    const [drop,setDrop] = useState(false)
    const auth = getAuth();

    const logout= (e)=>{
      e.preventDefault()
      signOut(auth).then(()=>{
        window.location.reload(true);
      }).catch((error)=>{
        alert(error)
      })
    }
  return (
    <div className='profile'>
        <div className='profile_icon' onClick={()=>setDrop(!drop)}>
            <Avatar className='profile_avatar'/>
            <p>Me</p>
        </div>
        <div className={`${drop?'profile_dropDown':'hidden'}`}>
            <p>Profile</p>
            <p>Settings</p>
            <p className='menu' onClick={logout}>Logout</p>  
        </div>
    </div>
  )
}

export default ProfileIcon