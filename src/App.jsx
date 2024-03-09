import { useEffect, useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'

const App = () => {
  const [mousePosition,setMousePosition] = useState({x:0,y:0})
  const [Variant,SetVariant]=useState('default')

  const variants={
    default:{
      height:50,
      width:50,
      borderRadius:25,
      x:mousePosition.x,
      y:mousePosition.y,
    },
    scaleAnimate:{
      height:100,
      width:100,
      borderRadius:50,
      x:mousePosition.x,
      y:mousePosition.y,
      backgroundColor:'#eee',
      mixBlendMode:'difference',
      color:'#111'
    }
  }

  useEffect(()=>{
    const setMouse = (e) =>{
      setMousePosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",setMouse)
    return ()=>{
      window.removeEventListener('mousemove',setMouse)
    }
  },[mousePosition])

  return (
    
    <>
      <main className='OnlyPage'>
        <div className='TextHolder' >
        <motion.div className='myCursor' variants={variants} animate={Variant} ></motion.div>
          <h1 className='myText' onMouseEnter={()=>{SetVariant('scaleAnimate')}} onMouseLeave={()=>{SetVariant('default')}}>HELLO WORLD</h1>
        </div>
      </main>
    </>
  )
}

export default App
