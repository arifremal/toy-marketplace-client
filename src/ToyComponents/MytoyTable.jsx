import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Components/AuthProvide/AuthProvider";

const MytoyTable = ({ toy, toyDelete,toyUpdate }) => {
  const { name, price, _id, detail_description, available_quantity } = toy;
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{detail_description}</td>
      <td>{available_quantity}</td>
      <td>
        <p>{price}</p>
      </td>
      <th>
        {/* <button className="btn btn-ghost  bg-green-500 text-white hover:bg-black btn-xs">
          Update       
        </button> */}
        {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn border-none bg-green-500 text-white hover:bg-black btn-xs">Update</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle " />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    {/* <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
    <form onSubmit={ handleSubmit(toyUpdate)}>
          {errors.exampleRequired && <span>This field is required</span>}
          
          
        
          <input
            className="border w-1/2  p-1"
            {...register("price")}
            // placeholder="Price"
            defaultValue={price}
          />
          <input
            className="border w-1/2  p-1 hidden"
            {...register("_id")}
            // placeholder="Price"
            defaultValue={_id}
          />
         <br />
          <input
            className="border w-full p-1 my-1"
            {...register("available_quantity")}
            type="number"
        defaultValue={available_quantity}
          />
          <br />
          
          <input
            className="w-full p-8 border mb-5"
            {...register("detail_description")}
            defaultValue={detail_description}
          />{" "}
          <br />
          <input
            className="btn bg-green-500 border-none"
            value="Update"
            type="submit"
          />
        </form>
  </div>
</div>
      </th>
      <th>
        <button
          onClick={() => toyDelete(_id)}
          className="btn btn-ghost btn-xs  bg-green-500 text-white hover:bg-black"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MytoyTable;
