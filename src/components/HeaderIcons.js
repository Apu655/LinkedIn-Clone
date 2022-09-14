import { Avatar } from '@material-ui/core'
import React from 'react'

export default function HeaderIcons({title,Icon,avatar}) {
  return (

    <div className='header_icon'>
        <h3 className='headerOption_title'>{title}</h3>
        {Icon && <Icon className='headerOption_icon'/>}
        {avatar && <Avatar className='headerOption_icon' src={avatar} />}
        
    </div>
  )
}
