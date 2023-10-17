import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import './ViewCoffee.css'



const ViewCoffee = () => {
    const coffee = useLoaderData();
    const { name, chef, price, supplier, category, details, photo } = coffee;

    console.log(coffee)
    return (
        <div className="bp">
                <div className='mt-2 mx-16 my-5'>
                    <Link className='flex items-center gap-2' to='/'><AiOutlineArrowLeft></AiOutlineArrowLeft> Back to home</Link>
                </div>
            <div className="border-box bg-[#F4F3F0] w-[80%] mx-auto">
                <div className="flex items-center w-[90%] mx-auto">
                    <div className="w-full">
                        <img className="w-3/4 mx-auto" src={photo} alt="" />
                    </div>
                    <div className="w-full">
                        <h3 className="font-semibold">Niceties</h3>
                        <p className="font-semibold">Name : <span className="font-normal">{name}</span></p>
                        <p className="font-semibold">Chef : <span className="font-normal">{chef}</span></p>
                        <p className="font-semibold">Price : <span className="font-normal">{price}</span></p>
                        <p className="font-semibold">Supplier : <span className="font-normal">{supplier}</span></p>
                        <p className="font-semibold">Category : <span className="font-normal">{category}</span></p>
                        <p className="font-semibold">Details : <span className="font-normal">{details}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;