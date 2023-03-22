
import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div className="container">

        {/* heading container */}
        <div>
        <h2 className='title'>Plan with Us</h2>
        </div>
            
            {/* card container */}
            <div className='cards'>
               {
                    tours.map( (tour)=>{ {/* har ek single tours element ki value k lie card return kardo */}
                {/* cloning tour element by using spread operator */}
                    return <Card  key={tour.id} {...tour} removeTour={removeTour}></Card> 
                    {/* always make key while using map function */}
                } )
               }
            </div>
            

        </div>
    

    );
}

export default Tours;