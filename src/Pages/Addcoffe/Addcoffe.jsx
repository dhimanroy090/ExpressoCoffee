import { Link } from 'react-router-dom';
// import arr from '../../assets/images/arrow.png';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Swal from 'sweetalert2';



const Addcoffee = () => {
  const handleAddCoffe = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.coffee.value;
    const chef = from.chef.value;
    const price = from.price.value;
    const supplier = from.supplier.value;
    const category = from.category.value;
    const details = from.details.value;
    const photo = from.photo.value;

    const addcoffee = { name, chef, price, supplier, category, details, photo };
    fetch('http://localhost:5000/coffees',{
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(addcoffee)
    })
    .then(res => res.json())
    .then (data => {
        if(data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sucessfully added Coffee',
                showConfirmButton: false,
                timer: 1500
              })
        }
        from.reset();
    })
    console.log(addcoffee);
  };

  return (
    <div>
      {/* <div className="mt-2 mx-16"><button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><img src={arr} className='w-6 h-6'/>Back to home</button></div>
       */}

       <div className='mt-2 mx-16'>
        <Link className='flex items-center gap-2' to='/'><AiOutlineArrowLeft></AiOutlineArrowLeft> Back to home</Link>
       </div>

      <div className="text-center w-[80%] mx-auto">
        <h2 className="text-[45px] font-semibold my-5">Add A Coffee</h2>
        <p className="text-lg">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffe} className="w-[90%] mx-auto">
        <div className="flex gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
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
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
        </div>

        <input
          className="btn btn-secondary w-full my-5"
          type="submit"
          value="Add coffee"
        />
      </form>
    </div>
  );
};

export default Addcoffee;
