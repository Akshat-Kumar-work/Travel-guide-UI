
import Tours from "./components/Tours";
import data from "./data";
import { useState } from "react";

function App() {


  const [tours,setTours] = useState(data);

  function removeTourHandler(id){
   // purane wale object m se hum data ko newTour vale object m dalnge jinki id match nahi hogi 
      const newTour = tours.filter(tour => tour.id!==id);
      setTours(newTour);
  }

  //agar sare tour hat gye hai toh nahi hai toh
  if(tours.length===0){
    return (
      <div className='refresh'>
        <h2>Sorry No Tours Left</h2>
        {/* jab button par click ho tab sara data vapis daldo tours m */}
        <button className="btn-white" onClick={()=>{
          setTours(data);
        }}
        >Click to Refresh</button>
      </div>
    )
  }

  
  return (
   <div className="App">
    <Tours
          tours={tours} removeTour = {removeTourHandler}>
    </Tours>
    
   </div>
  );
}

export default App;
