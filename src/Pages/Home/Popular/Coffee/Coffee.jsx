import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { LuEdit2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffee = ({ coffee,coffees, setCoffees }) => {
    console.log(coffee);
    const {_id, name, photo, chef, price } = coffee;
    const handleDelete =(_id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
              console.log('delete', _id)
                fetch(`http://localhost:5000/coffees/${_id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount> 0){

                        Swal.fire(
                          'Deleted!',
                          'Your coffee has been deleted.',
                          'success'
                        )
                        const remaining = coffees.filter(c=>c._id !== _id);
                        setCoffees(remaining)
                    }
                })
            }
          })
    }
    return (
        <div className="">
            <div className="">
                <div className="flex items-center justify-evenly gap-3 rounded-lg bg-[#F5F4F1] box-border ">
                    <img src={photo} />
                    <div className="space-y-3">
                        <h2><span className="font-semibold">Name: </span>{name}</h2>
                        <h2><span className="font-semibold">Chef: </span>{chef}</h2>
                        <h2><span className="font-semibold">Price: </span>{price} Taka only</h2>
                    </div>
                    <div className="flex flex-col">
                        <Link to={`/view/${_id}`}><button className="btn btn-primary "><AiOutlineEye></AiOutlineEye></button></Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-primary my-2"><LuEdit2></LuEdit2></button>
                        </Link>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary"><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;