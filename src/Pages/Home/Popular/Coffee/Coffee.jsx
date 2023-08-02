import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { LuEdit2 } from "react-icons/lu";


const Coffee = ({coffee}) => {
    console.log(coffee);
    const {name,photo,chef,price}=coffee;
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
                        <button className="btn btn-primary "><AiOutlineEye></AiOutlineEye></button>
                        <button className="btn btn-primary my-2"><LuEdit2></LuEdit2></button>
                        <button className="btn btn-primary"><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;