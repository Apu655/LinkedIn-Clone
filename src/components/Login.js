import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {login} from '../features/counter/userSlice'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [user,setUser]= useState('')

    const dispatch = useDispatch();
    let auth = getAuth()

    const loginToApp=(e)=>{
        e.preventDefault()
        
            signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                
            })
            .catch((error)=>{
                alert(error)
            })

        }
    
    const register= (e)=>{
        e.preventDefault()
        if (!name){
            return alert("Please enter a full name!")
        }
        else{
            createUserWithEmailAndPassword(auth,email,password)
            .then(async (userAuth)=>{
                await updateProfile(userAuth.user,{
                    displayName:name,
                    
                }
                
                )
                window.location.reload(true)
                // userAuth.user.updateProfile({
                //     displayName:name,

                // })
                console.log(userAuth)
            //     .then(()=>{
            //         dispatch(login({
            //             email:userAuth.user.email,
            //             uid: userAuth.user.uid,
            //             displayName:name,
            //         }))
            // })
           
            }).catch(error=>alert(error))
        }
    }
  return (
    <div className='login'>
        <h3>Linked <span>in</span></h3>

        <form>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full Name' type="text"/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="text"/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password"/>
            <button type='submit' onClick={loginToApp}>Sign In</button>
            <p>{user.email}</p>
            

        </form>

        <p className='reg'>Not a member?
            <button className='register-btn' onClick={register}>Register Now</button>
        </p>


    </div>
  )
}

export default Login