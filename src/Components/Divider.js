import React from 'react'
// import "../style.css"

export default function Divider({to='to', first='left', second='bottom', fColor='#0a020ac0',sColor='white'}) {
    
    const myStyle={
            width:"100%",
            height:"9rem",
            position:"absolute",
            left:"0px",
            background: `linear-gradient(${to} ${first} ${second}, ${fColor}  49%,  ${sColor} 50%)`,
    }
  return (
      <>
<div style={myStyle}></div>
</> 
 )
}
