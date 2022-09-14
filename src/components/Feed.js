import React,{useState,useEffect} from 'react'
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post';
import {db} from "../firebase";
import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app';
import { updateDoc, serverTimestamp } from "firebase/firestore";

export default function Feed() {

  const auth = getAuth()
  const user = auth.currentUser;
  const [posts,setPosts] = useState([])
  const [input,setInput] = useState('')
  
  useEffect(()=>{
    db.collection('posts').orderBy("timestamp","desc")
    .onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc=>(
        {
          id: doc.id,
          data:doc.data(),
        }
      )))
    ))
  },[])
  const sendPost=(e)=>{

    
    
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description:"Description",
      message:input,
      likes:0,
      photoUrl:"",
      //timestamp: firebase.firestore.Timestamp,
      timestamp: Date.now(),

    })
  }


  return (
    <div className='feed'>
         
         <div className='feed_inputContainer'>
             <div className='feed_input'>
                 <CreateIcon/>
                <form >
                    <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='Write a post......'></input>
                    <button onClick={sendPost}type='submit'>Send</button>

                </form>
            </div>
            <div className='feed_inputOptions'>
              <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
              <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
              <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
              <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
            </div>
             
         </div>
         {posts.map(({id,data:{name,description,message,photoUrl}})=>(
           <Post key={id} name={name} message={message} description={description}/>
         ))}
         {/* Post */}
         {/* <Post/> */}
    </div>
  )
}
