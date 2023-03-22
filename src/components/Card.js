import { useState } from "react";

function Card(props){

    const[readMore , setReadmore] = useState(false);

    // click karne par readmore true hai toh usko false krdo aur agar readmore false hai toh usko true krdo
    function readMoreHandler(){
        setReadmore(!readMore);
    }
    
    //readmore agar true hai toh adhi info dikhao
    const description =  readMore ? props.info :`${props.info.substring(0,200)}....` // props.info.substring(0,200);

   
    return(
        
// card container
<div className="card">


            <img src={props.image} className="image"></img>

{/* tour info */}
<div className="tour-info">
            {/* tour details */}
            <div className="tour-details">
                <h4 className="tour-price">{props.price}</h4>
                <h4 className="tour-name">{props.name}</h4>
            </div>


            {/* tour description */}
            <div className="description">
            {description}
            <span className="read-more" onClick={readMoreHandler}>
            {/* agar readMore ki value true hai toh show less dikhao agr flase hai toh read more dikhao */}
            {readMore ? `show less` : "read more"}
            </span>
            </div>
</div>

{/* yaha par card components sy app components m value pass hui hai id vali */}
            <button className="btn-red" onClick={ ()=> props.removeTour(props.id)}> 
            Not Interested
            </button>

        </div>

      
 
       
           );
        
}

export default Card;