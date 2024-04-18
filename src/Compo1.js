import React from 'react'
import "./Compo1.css"
import Compo2 from './Compo2';
const Compo1=(props)=>{


    const merafun=(val)=>{
       props.newval(val);
//         usekarnefun(newoj);
//        // console.log(usekarne.val1);
//     }
    };
return(
    <>
     <h2>App like canvas</h2>
<div className="firstDiv" style={{ backgroundColor: props.data.val4 }}>
<div className="secondDiv"> {props.data.val1 && (
            <img
              src={URL.createObjectURL(props.data.val1)}
              className="img"
              alt=""
            />
          )}</div>
<div className="fourthDiv"><p style={{color:"blue"}}>{props.data.val2}</p>
<p style={{color:"red"}}>The amount is :{props.data.val3}</p>
</div>
<div className="thirdDiv"><button>contact US</button></div>
</div>
<Compo2  wahajaanewala={merafun} />
</>  
);
}
export default Compo1;