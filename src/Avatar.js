import React from "react";

export default function Avatar(props){
    let {src,size="xl", type="rounded"} = props 
    return(
        <img src={src} alt="" className={size+" "+type}/>
    )
}