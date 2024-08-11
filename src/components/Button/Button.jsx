import React from 'react'
import classes from './Button.module.css'
export default function Button({children, isActive, ...props }) {
  /*let classes = 'button'
  if(isActive) classes += ' active'*/
  const handleMouseEnter = () => console.log('Mouse Enter')

  return (
    <button 
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      } 
      onMouseEnter={handleMouseEnter} 
      onDoubleClick={() => {console.log("Double click")}}>
      {children}</button>
  )
}
