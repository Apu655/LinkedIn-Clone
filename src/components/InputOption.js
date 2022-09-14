import React,{useState} from 'react'


function InputOption({Icon,title,color,activeColor,IconActive}) {
  const [active,setActive] = useState(false)
  return (
    <div onClick={()=>setActive(!active)} style ={active?{color:activeColor}:{}} className={`inputOption `}>
        {(!active)?(<Icon style={{color:color}}/>):IconActive?(<IconActive className="classIcon"/>):(<Icon style={{color:color}}/>)}
        {/* {IconActive && title && (<IconActive style={{color:color}}/>)} */}
        <p>{title}</p>


    </div>
  )
}

export default InputOption