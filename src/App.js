import Tours from "./components/Tours";
import data from "./data";
import { useState } from "react";

function App() {

  const [tours,setTours] = useState(data);

  function removeTourHandler(id){
   // purane wale object m se hum unko newTour vale object m dalnge jinki id match nahi hogi 
      const newTour = tours.filter(tour => tour.id!==id);
      setTours(newTour);
  }

  return (
   <div>
    <Tours
          tours={tours} removeTour = {removeTourHandler}>
    </Tours>
    
   </div>
  );
}

export default App;
