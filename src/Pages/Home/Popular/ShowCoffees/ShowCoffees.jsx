import { useEffect, useState } from "react";
import Coffee from "../Coffee/Coffee";


const ShowCoffees = () => {
    const [coffees,setCoffees]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/coffees")
        .then(res=> res.json())
        .then(data=>setCoffees(data))
        
    },[])
    console.log(coffees);
    return (
        <div>
            <div className="grid grid-cols-2 w-[80%] mx-auto gap-6">
                {
                    coffees.map(coffee=><Coffee 
                    key={coffee._id}
                    coffee={coffee}
                    ></Coffee>)
                }
            </div>
        </div>
    );
};

export default ShowCoffees;