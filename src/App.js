import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project/";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const remdata=(id)=>{
    const newtours=tours.filter((tour)=>tour.id!==id)
    setTours(newtours)
  }
  const fetchData = async () => {
    setLoading(true)
   try {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false)
   } catch (error) {
     console.log(error);
     setLoading(false)
   }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center fw-bold">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }
  if(tours.length===0){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h2 className="text-center fw-bold">No Tours Left...</h2>
          <button className='btn btn-success d-block mx-auto fw-bold' onClick={fetchData}>Refresh</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Tours tours={tours} rem={remdata}/>
        </div>
      </div>
    </div>
  );
}

export default App;
