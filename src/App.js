import React from 'react';
import Avatar from './Avatar';
import "./style.css"



function App() {
  let AvatarData=[
    {src:"https://picsum.photos/400/400", size:"s", type:"square"},
    {src:"https://picsum.photos/400/400", size:"m", type:"square"},
    {src:"https://picsum.photos/400/400", size:"l", type:"square"},
    {src:"https://picsum.photos/400/400", size:"xl", type:"square"},

    {src:"https://picsum.photos/400/400", size:"s", type:"rounded"},
    {src:"https://picsum.photos/400/400", size:"m", type:"rounded"},
    {src:"https://picsum.photos/400/400", size:"l", type:"rounded"},
    {src:"https://picsum.photos/400/400", size:"xl", type:"rounded"},

    {src:"https://picsum.photos/400/400", size:"s", type:"circle"},
    {src:"https://picsum.photos/400/400", size:"m", type:"circle"},
    {src:"https://picsum.photos/400/400", size:"l", type:"circle"},
    {src:"https://picsum.photos/400/400", size:"xl", type:"circle"},
  ];
  return (
    <div>
      {AvatarData.map((item)=>{
        return ( 
          <div style={{width:"300px"}}>
          <Avatar
          src={item.src}
          size={item.size}
          type={item.type}
          />
          <h3>size {item.size} with {item.size==="m"?"30x30": item.size==="m"?"60x60": item.size==="l"?"120x120":"200x200"}</h3>
          <h3>type {item.type}</h3>
          
            </div>
        )
      })}
    </div>
  );
}


export default App;