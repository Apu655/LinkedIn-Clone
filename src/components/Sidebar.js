import React from 'react';
import { Avatar } from '@material-ui/core';
import {getAuth,onAuthStateChanged} from 'firebase/auth'
export default function Sidebar() {
    const auth = getAuth()

    const recentItem= (topic)=>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>
                #
            </span>
            <p>{topic}</p>
        </div>
    )

  return (
      <>
      <div className='sidebar'>
        <div className='sidebar_top'>
            <img src="https://media.istockphoto.com/photos/blue-background-picture-id157571423?k=20&m=157571423&s=612x612&w=0&h=GxSD_uRBNlBtsvXo54kGstPong-zzqKR545fF1Y5Mws=" alt=""/>
            <Avatar className='sidebar_avatar'/>
            <h2>{auth.currentUser.displayName}</h2>
            <h4>{auth.currentUser.email}</h4>     
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,543</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNumber'>4,021</p>
            </div>

            
            
        </div>
        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem("React Js")}
            {recentItem("software Engineering")}
            {recentItem("Programming")}
            {recentItem("Web Developer")}

        </div>
    </div>
    </>

  )
}
