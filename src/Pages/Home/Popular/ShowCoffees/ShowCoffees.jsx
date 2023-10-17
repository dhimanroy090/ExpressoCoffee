import {  useState } from "react";
import Coffee from "../Coffee/Coffee";
import { useLoaderData } from "react-router-dom";


const ShowCoffees = () => {
    const loadedCoffee = useLoaderData();
    const [coffees,setCoffees]=useState(loadedCoffee);
    
    console.log(coffees);
    return (
        <div>
            <div className="grid grid-cols-2 w-[80%] mx-auto gap-6">
                {
                    coffees.map(coffee=><Coffee 
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></Coffee>)
                }
            </div>
        </div>
    );
};

export default ShowCoffees;