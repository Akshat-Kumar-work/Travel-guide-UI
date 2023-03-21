import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div>

        {/* heading container */}
        <div>
        <h2>Plan with Us</h2>
        </div>
            
            {/* card container */}
            <div>
               {
                    tours.map( (tour)=>{ {/* har ek single tourselement ki value k lie card return kardo */}
                {/* cloning tour element by using spread operator */}
                    return <Card {...tour} removeTour={removeTour}></Card> 
                } )
               }
            </div>

        </div>
        

    );
}

export default Tours;