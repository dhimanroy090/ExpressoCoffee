
import { Link } from 'react-router-dom';
import ShowCoffees from './ShowCoffees/ShowCoffees';

const Popular = () => {
    return (
        <div>
            <Link to='/addcoffee' className='btn btn-primary text-black'>Add Coffee</Link>
            <ShowCoffees></ShowCoffees>
        </div>
    );
};

export default Popular;