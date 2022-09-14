import { Avatar } from '@material-ui/core'
import React from 'react'
import {getAuth} from 'firebase/auth'
import InputOption from './InputOption'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'


function Post({name,message,description,timestamp}) {
    const auth = getAuth()
    const user = auth.currentUser;
  return (
    <div className='post '>
        <div className='post_header'>
            <Avatar/>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>Description {timestamp}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} IconActive={ThumbUpAltIcon} title="Like" activeColor="#0074b1"/>
            <InputOption onClick={()=>console.log("Clicked on comment icon")} Icon={ChatOutlinedIcon} title="Comment" isComment = {true} />
            <InputOption Icon={ShareOutlinedIcon} title="Share"/>
            <InputOption Icon={SendOutlinedIcon} title="Send"/>
        </div>
    </div>
  )
}

export default Post