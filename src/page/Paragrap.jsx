 import React from "react";

 const  Para=({paragraph})=>{
    return(
        <div>
            <h1>{paragraph.headings}</h1>
            <p>{paragraph.para}</p>
        </div>
    )
 }
 export default Para;