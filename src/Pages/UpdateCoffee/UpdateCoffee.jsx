import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id,name, chef, price, supplier, category, details, photo } = coffee;
    console.log(coffee)
    const handleUpdateCoffe = (e) =>{
        e.preventDefault();
    const from = e.target;
    const name = from.coffee.value;
    const chef = from.chef.value;
    const price = from.price.value;
    const supplier = from.supplier.value;
    const category = from.category.value;
    const details = from.details.value;
    const photo = from.photo.value;

    const updatedCoffee = { name, chef, price, supplier, category, details, photo };
    console.log(updatedCoffee);
    fetch(`http://localhost:5000/coffees/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount >0){

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    }
    return (
        <div>
            <div>


       <div className='mt-2 mx-16'>
        <Link className='flex items-center gap-2' to='/'><AiOutlineArrowLeft></AiOutlineArrowLeft> Back to home</Link>
       </div>

      <div className="text-center w-[80%] mx-auto">
        <h2 className="text-[45px] font-semibold my-5">Update Existing Coffee Details</h2>
        <p className="text-lg">
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffe} className="w-[90%] mx-auto">
        <div className="flex gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
                className="input input-bordered w-full"
                name="coffee"
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Chef"
                defaultValue={chef}
                className="input input-bordered w-full"
                name="chef"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-3 my-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Suppllier"
                defaultValue={supplier}
                className="input input-bordered w-full"
                name="supplier"
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="price"
                defaultValue={price}
                className="input input-bordered w-full"
                name="price"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-3 my-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                defaultValue={category}
                className="input input-bordered w-full"
                name="category"
              />
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="PhotoURL"
                defaultValue={photo}
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
        </div>

        <input
          className="btn  bg-[#D2B48C]  border-[#331A15] w-full my-5"
          type="submit"
          value="Update Coffee Details"
        />
      </form>
    </div>
        </div>
    );
};

export default UpdateCoffee;