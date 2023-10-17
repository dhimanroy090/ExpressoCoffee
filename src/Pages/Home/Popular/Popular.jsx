
import { Link } from 'react-router-dom';
import { TiCoffee } from "react-icons/ti";
import ShowCoffees from './ShowCoffees/ShowCoffees';
import "../Banner/Banner.css"

const Popular = () => {
    return (
        <div className='my-32 pop_bg'>
            
            <div className='text-center space-y-2'>
                <p>--Sip & Savor</p>
                <h3 className='text-3xl font-semibold text-[#331A15]'>Our Popular Products</h3>
                <Link to='/addcoffee'>
                    <button className=' my-8 px-3 py-2 border-2  border-[#331A15] bg-[#E3B577] rounded-lg text-white '>Add Coffee <TiCoffee className='inline text-3xl'></TiCoffee></button>
                </Link>
            </div>
            <div className='w-full mx-auto'><ShowCoffees></ShowCoffees></div>
        </div>
    );
};

export default Popular;