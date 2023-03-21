import { useState } from "react";

function Card(props){
    const[readMore , setReadmore] = useState(false);

    // click karne par readmore true hai toh usko false krdo aur agar readmore false hai toh usko true krdo
    function readMoreHandler(){
        setReadmore(!readMore);
    }
    
    const description =  readMore ? props.info :`${props.info.substring(0,200)}....` // props.info.substring(0,200);

   
    return(
        
// card container
<div>


            <img src={props.image} ></img>

{/* tour info */}
<div>
            {/* tour details */}
            <div>
                <h4>{props.price}</h4>
                <h4>{props.name}</h4>
            </div>


            {/* tour description */}
            <div>
            {description}
            <span onClick={readMoreHandler}>
            {/* agar readMore ki value true hai toh show less dikhao agr flase hai toh read more dikhao */}
            {readMore ? `show less` : `read more`}
            </span>
            </div>
</div>


            <button onClick={ ()=> props.removeTour(props.id)}>
            Not Interested
            </button>

        </div>

      
 
       
           );
        
}

export default Card;